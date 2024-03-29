import React from 'react';
import { Input, Select } from '@inseefr/wilco';
import { getEnv } from 'env';

const FILE_OUTPUT_OPTIONS = [
	{ value: 'parquet', label: 'Apache Parquet' },
	{ value: 'csv', label: 'CSV' },
];

const FILE_INPUT_OPTIONS = [
	...FILE_OUTPUT_OPTIONS,
	{ value: 'sas', label: 'SAS' },
];

const filePathLocation = getEnv()['FILE_PATH_LOCATION'];

const InputFilePath = ({
	filetype,
	setFiletype,
	url,
	setUrl,
	toSave = false,
}) => {
	const FILE_TYPE_LABEL =
		filePathLocation === 'LOCAL' ? 'File type' : 'S3 file type';
	const URL_PLACEHOLDER =
		filePathLocation === 'LOCAL'
			? 'file:///folder_path'
			: 's3a://bucket/folder';
	const list = toSave ? FILE_OUTPUT_OPTIONS : FILE_INPUT_OPTIONS;
	return (
		<>
			<div className="row">
				<div className="col-md-6">
					<Select
						label={FILE_TYPE_LABEL}
						value={list.find(({ value }) => value === filetype)}
						onChange={setFiletype}
						options={list}
						col={12}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<Input
						label="Connection URL"
						value={url}
						onChange={setUrl}
						col={12}
						placeholder={URL_PLACEHOLDER}
						helpMsg={`View results will automatically be limited to 100 rows`}
					/>
				</div>
			</div>
		</>
	);
};

export default InputFilePath;
