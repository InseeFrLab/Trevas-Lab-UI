import React, { useState } from 'react';
import { Button } from '@inseefr/wilco';
import SlidingPanel from 'components/common/sliding-panel';
import FileUploader from 'components/common/file-uploader';
import { saveAs } from 'file-saver';
import { DownloadIcon, UploadIcon } from 'components/common/icons';
import { getEnv } from 'env';

const fileName = 'configuration.json';
const sparkUI = getEnv()['SPARK_UI'];

const Configuration = ({
	script,
	setScript,
	bindings,
	setBindings,
	hasScriptErrors,
}) => {
	const [openUpload, setOpenUpload] = useState(false);
	const [file, setFile] = useState(null);
	const [fileScript, setFileScript] = useState(null);
	const [fileBindings, setFileBindings] = useState(null);

	const onDownload = () => {
		const fileToSave = new Blob(
			[JSON.stringify({ script, bindings }, null, 4)],
			{
				type: 'application/json',
				name: fileName,
			}
		);
		saveAs(fileToSave, fileName);
	};

	const onUpload = ({ script: s, bindings: b }) => {
		setFileScript(s);
		setFileBindings(b);
	};

	const onValidate = () => {
		setScript(fileScript);
		setBindings(fileBindings);
		setOpenUpload(false);
	};

	return (
		<>
			<div className="row">
				<Button
					label={<DownloadIcon />}
					action={onDownload}
					disabled={
						(Object.keys(bindings).length === 0 && script === '') ||
						hasScriptErrors
					}
				/>
				<Button
					label={<UploadIcon />}
					action={() => {
						setOpenUpload(true);
					}}
				/>
				{sparkUI && (
					<>
						<div className="col-md-6 header-item" />
						<Button label={'Spark UI'} action={sparkUI} externalLink />
					</>
				)}
			</div>
			<SlidingPanel
				title="Binding definition"
				open={openUpload}
				setOpen={setOpenUpload}
				width={'60%'}
				from="left"
			>
				<p>Upload your JSON file</p>
				<FileUploader file={file} setData={onUpload} setFile={setFile} />
				<div className="row">
					<Button label="Import" action={onValidate} col={3} disabled={!file} />
				</div>
			</SlidingPanel>
		</>
	);
};

export default Configuration;
