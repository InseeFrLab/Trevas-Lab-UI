import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Input } from '@inseefr/wilco';
import SlidingPanel from 'components/common/sliding-panel';
import FileUploader from 'components/common/file-uploader';
import { saveAs } from 'file-saver';
import { DownloadIcon, UploadIcon } from 'components/common/icons';
import { getEnv } from 'env';
import { SPARK_STATIC_PATH, SPARK_KUBERNETES_PATH } from 'utils/constants';

const sparkUI = getEnv()['SPARK_UI'];

const Configuration = ({
	script,
	setScript,
	bindings,
	setBindings,
	toSave,
	setToSave,
	hasScriptErrors,
	setRes,
}) => {
	const { pathname } = useLocation();
	const [openUpload, setOpenUpload] = useState(false);
	const [openDownload, setOpenDownload] = useState(false);
	const [fileName, setFileName] = useState('');
	const [file, setFile] = useState(null);
	const [fileScript, setFileScript] = useState(null);
	const [fileBindings, setFileBindings] = useState(null);
	const [fileToSave, setFileToSave] = useState(null);

	const onValidateDownload = () => {
		const fileToSave = new Blob(
			[JSON.stringify({ script, bindings, toSave }, null, 4)],
			{
				type: 'application/json',
				name: fileName,
			}
		);
		saveAs(fileToSave, fileName);
		setOpenUpload(false);
	};

	const onUpload = ({ script: s, bindings: b, toSave: t = {} }) => {
		setFileScript(s);
		setFileBindings(b);
		setFileToSave(t);
	};

	const onValidateUpload = () => {
		setScript(fileScript);
		setBindings(fileBindings);
		if (setToSave) setToSave(fileToSave);
		setRes(null);
		setOpenUpload(false);
	};

	const displaySparkUIButton = [
		SPARK_STATIC_PATH,
		SPARK_KUBERNETES_PATH,
	].includes(pathname);

	return (
		<>
			<div className="row">
				<Button
					label={
						<>
							<DownloadIcon />
							<span>Dowload</span>
						</>
					}
					action={() => {
						setOpenDownload(true);
					}}
					disabled={
						(Object.keys(bindings).length === 0 && script === '') ||
						hasScriptErrors
					}
				/>
				<Button
					label={
						<>
							<UploadIcon />
							<span>Upload</span>
						</>
					}
					action={() => {
						setOpenUpload(true);
					}}
				/>
				{displaySparkUIButton && sparkUI && (
					<>
						<div className="col-md-6 header-item" />
						<Button label={'Spark UI'} action={sparkUI} externalLink />
					</>
				)}
			</div>
			<SlidingPanel
				title="Upload configuration"
				open={openUpload}
				setOpen={setOpenUpload}
				width={'60%'}
				from="left"
			>
				<p>Upload your JSON file</p>
				<FileUploader file={file} setData={onUpload} setFile={setFile} />
				<div className="row">
					<Button
						label="Import"
						action={onValidateUpload}
						col={3}
						disabled={!file}
					/>
				</div>
			</SlidingPanel>
			<SlidingPanel
				title="Download configuration"
				open={openDownload}
				setOpen={setOpenDownload}
				width={'60%'}
				from="left"
			>
				<p>Download your JSON file</p>
				<div className="row">
					<div className="col-md-6">
						<Input
							label="File name"
							value={fileName}
							onChange={(e) => {
								setFileName(e.target.value);
							}}
							col={12}
						/>
					</div>
				</div>
				<div className="row">
					<Button
						label="Export"
						action={onValidateDownload}
						col={3}
						disabled={!fileName}
					/>
				</div>
			</SlidingPanel>
		</>
	);
};

export default Configuration;
