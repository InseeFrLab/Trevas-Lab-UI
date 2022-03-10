import React, { useState } from 'react';
import { Button } from '@inseefr/wilco';
import ReactTooltip from 'react-tooltip';
import FileUploader from 'components/common/file-uploader';
import { connectExample } from './connect-example';
import DataTable from 'components/common/data-table';

const ConnectBindings = () => {
	const [data, setData] = useState(null);
	const [displayResults, setDisplayResults] = useState(false);

	const handleFile = (d) => {
		debugger;
		setData(d);
		setDisplayResults(false);
	};

	const onVizualize = () => {
		setDisplayResults(true);
	};

	const onSave = () => {};

	return (
		<>
			<p>
				You have to upload a JSON file (
				<span style={{ color: 'blue' }} data-tip data-for="shape">
					content shape example
				</span>
				):
			</p>
			<FileUploader setter={handleFile} />
			<Button
				label="Vizualize"
				action={onVizualize}
				disabled={data ? false : true}
			/>
			{displayResults && (
				<>
					<DataTable vtlJson={data} />
					<Button label="Save" action={onSave} />
				</>
			)}
			<ReactTooltip place="bottom" id="shape" type="info" effect="solid">
				<pre>{JSON.stringify(connectExample, null, 4)}</pre>
			</ReactTooltip>
		</>
	);
};

export default ConnectBindings;
