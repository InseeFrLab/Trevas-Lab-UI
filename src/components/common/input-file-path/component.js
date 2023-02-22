import React from 'react';
import { Input, Select } from '@inseefr/wilco';
import { getEnv } from 'env';

const FILE_OPTIONS = [
	{ value: 'parquet', label: 'Apache Parquet' },
	{ value: 'csv', label: 'CSV' },
];

const filePathLocation = getEnv()['FILE_PATH_LOCATION'];

const InputFilePath = ({ filetype, setFiletype, url, setUrl }) => {
	const FILE_TYPE_LABEL =
		filePathLocation === 'LOCAL' ? 'File type' : 'S3 file type';
	const URL_PLACEHOLDER =
		filePathLocation === 'LOCAL'
			? 'file:///folder_path'
			: 's3a://bucket/folder';
	return (
		<>
			<div className="row">
				<div className="col-md-6">
					<Select
						label={FILE_TYPE_LABEL}
						value={FILE_OPTIONS.find(({ value }) => value === filetype)}
						onChange={setFiletype}
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
						onChange={setUrl}
						col={12}
						placeholder={URL_PLACEHOLDER}
						helpMsg={`View results will automatically be limited to 1 000 rows`}
					/>
				</div>
			</div>
		</>
	);
};

export default InputFilePath;
