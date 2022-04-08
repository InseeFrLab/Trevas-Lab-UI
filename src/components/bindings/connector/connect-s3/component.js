import React, { useState } from 'react';
import { Button, Input, Select } from '@inseefr/wilco';
import ConnectS3ViewResults from './results';
import { S3 } from 'utils/constants';

const DEFAULT_INIT = {
	name: undefined,
	filetype: undefined,
	url: undefined,
};

const FILE_OPTIONS = [{ value: 'parquet', label: 'Apache Parquet' }];

const ConnectS3Bindings = ({
	bindings,
	setBindings,
	closePanel,
	init = DEFAULT_INIT,
	deletable,
}) => {
	const [name, setName] = useState(init.name);
	const [nameError, setNameError] = useState(false);
	const [filetype, setFiletype] = useState(init.filetype);
	const [url, setUrl] = useState(init.url);
	const [displayResults, setDisplayResults] = useState(false);

	const handleName = (e) => {
		const newName = e.target.value;
		setName(newName);
		if (nameError && !bindings[newName]) setNameError(false);
		if (newName !== init.name && bindings[newName]) setNameError(true);
		setDisplayResults(false);
	};

	const handleFileType = (d) => {
		setFiletype(d);
		setDisplayResults(false);
	};

	const handleUrl = (d) => {
		setUrl(d.target.value);
		setDisplayResults(false);
	};

	const onView = () => {
		setDisplayResults(true);
	};

	const onSave = () => {
		setBindings((b) => {
			const { [init.name]: omit, ...others } = b;
			return {
				...others,
				[name]: { type: S3, url, filetype },
			};
		});
		closePanel();
	};

	const onDelete = () => {
		setBindings((b) => {
			const { [init.name]: omit, ...others } = b;
			return others;
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
						onChange={(e) => handleName(e)}
						col={12}
						helpMsg={nameError ? `Binding " ${name} " already defined` : ''}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<Select
						label="S3 file type"
						value={FILE_OPTIONS.find(({ value }) => value === filetype)}
						onChange={(e) => handleFileType(e)}
						options={FILE_OPTIONS}
						col={12}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<Input
						label="Connection URL"
						value={url}
						onChange={(e) => handleUrl(e)}
						col={12}
						placeholder="s3a://bucket/folder"
						helpMsg={`View results will automatically be limited to 1 000 rows`}
					/>
				</div>
			</div>
			<div className="row">
				<Button
					label="View"
					action={onView}
					disabled={name && url && filetype && !nameError ? false : true}
					col={3}
				/>
			</div>
			<div className="row">
				<Button label="Save" action={onSave} col={3} />
			</div>
			{displayResults && (
				<ConnectS3ViewResults
					filetype={filetype}
					url={url}
					onSave={onSave}
					closePanel={closePanel}
					deletable={deletable}
					onDelete={onDelete}
				/>
			)}
			<div className="row">
				<Button label="Cancel" action={closePanel} col={3} />
				{deletable && (
					<Button
						label="Delete"
						action={onDelete}
						col={3}
						classes={['wilco-btn-red']}
					/>
				)}
			</div>
		</>
	);
};

export default ConnectS3Bindings;
