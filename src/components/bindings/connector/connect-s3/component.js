import React, { useState } from 'react';
import { Button, Input } from '@inseefr/wilco';
import InputFilePath from 'components/common/input-file-path';
import View from '../view';
import { S3 } from 'utils/constants';

const DEFAULT_INIT = {
	name: undefined,
	filetype: undefined,
	url: undefined,
};

const ConnectS3Bindings = ({
	bindings,
	setBindings,
	closePanel,
	init = DEFAULT_INIT,
	deletable,
	disableView,
	toSave,
}) => {
	const [name, setName] = useState(init.name);
	const [nameError, setNameError] = useState(false);
	const [filetype, setFiletype] = useState(init.filetype);
	const [url, setUrl] = useState(init.url);

	const handleName = (e) => {
		const newName = e.target.value;
		setName(newName);
		if (nameError && !bindings[newName]) setNameError(false);
		if (newName !== init.name && bindings[newName]) setNameError(true);
	};

	const handleUrl = (d) => {
		setUrl(d.target.value);
	};

	const onSave = () => {
		setBindings((b) => {
			const { [init.name]: omit, ...others } = b;
			return {
				...others,
				[name.replace(/ /g, '_')]: { type: S3, url, filetype },
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
			<InputFilePath
				filetype={filetype}
				setFiletype={setFiletype}
				url={url}
				setUrl={handleUrl}
				toSave={toSave}
			/>
			{!disableView && (
				<View
					filetype={filetype}
					url={url}
					connectorType={S3}
					bodyKey={'s3ForBindings'}
					disabledCondition={url && filetype}
				/>
			)}
			<div className="row">
				<Button
					label="Save"
					action={onSave}
					col={3}
					disabled={!url || !filetype || nameError || !name}
				/>
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
