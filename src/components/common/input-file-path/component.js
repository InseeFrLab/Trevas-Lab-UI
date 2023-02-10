import React from 'react';
import { Input, Select } from '@inseefr/wilco';
import { getEnv } from 'env';

const FILE_OPTIONS = [
	{ value: 'parquet', label: 'Apache Parquet' },
	{ value: 'csv', label: 'CSV' },
];

const filePathLocation = getEnv()['FILE_PATH_LOCATION'];

const InputFilePath = ({ filetype, setFiletype, url, setUrl }) => {
	if (filePathLocation === 'LOCAL') return null;
	return (
		<>
			<div className="row">
				<div className="col-md-6">
					<Select
						label="S3 file type"
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
						placeholder="s3a://bucket/folder"
						helpMsg={`View results will automatically be limited to 1 000 rows`}
					/>
				</div>
			</div>
		</>
	);
};

export default InputFilePath;
