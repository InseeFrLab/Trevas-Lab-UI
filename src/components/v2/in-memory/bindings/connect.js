import React, { useState } from 'react';
import { Button, Input } from '@inseefr/wilco';
import ReactTooltip from 'react-tooltip';
import FileUploader from 'components/common/file-uploader';
import { connectExample } from './connect-example';
import DataTable from 'components/common/data-table';
import { LOCAL_JSON } from 'utils/constants';

const DEFAULT_INIT = { name: '', file: null, data: null };

const ConnectBindings = ({ setBindings, closePanel, init = DEFAULT_INIT }) => {
	const [name, setName] = useState(init.name);
	const [file, setFile] = useState(init.file);
	const [data, setData] = useState(init.data);
	const [displayResults, setDisplayResults] = useState(false);

	const handleData = (d) => {
		setData(d);
		setDisplayResults(false);
	};

	const onVizualize = () => {
		setDisplayResults(true);
	};

	const onSave = () => {
		setBindings((b) => {
			const { [init.name]: omit, ...others } = b;
			return {
				...others,
				[name]: { type: LOCAL_JSON, value: data, file },
			};
		});
		closePanel();
	};

	return (
		<>
			<div className="row">
				<div className="col-md-6">
					<Input
						label="Binding name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
						col={12}
					/>
				</div>
				<div className="col-md-6">
					<p>
						Upload your JSON file (
						<span style={{ color: 'blue' }} data-tip data-for="shape">
							content shape example
						</span>
						)
					</p>
					<FileUploader file={file} setData={handleData} setFile={setFile} />
				</div>
			</div>
			<div className="row">
				<Button
					label="Vizualize"
					action={onVizualize}
					disabled={data && name ? false : true}
					col={3}
				/>
			</div>
			{displayResults && (
				<>
					<DataTable vtlJson={data} />
					<div className="row">
						<Button label="Save" action={onSave} col={3} />
						<Button label="Cancel" action={closePanel} col={3} />
					</div>
				</>
			)}
			{!displayResults && (
				<div className="row">
					<Button label="Cancel" action={closePanel} col={3} />
				</div>
			)}
			<ReactTooltip place="bottom" id="shape" type="info" effect="solid">
				<pre>{JSON.stringify(connectExample, null, 4)}</pre>
			</ReactTooltip>
		</>
	);
};

export default ConnectBindings;