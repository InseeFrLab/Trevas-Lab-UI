import React, { useState } from 'react';
import { Button, Input } from '@inseefr/wilco';
import ReactTooltip from 'react-tooltip';
import FileUploader from 'components/common/file-uploader';
import { connectExample } from './example';
import ViewTable from 'components/common/view';
import { LOCAL_JSON } from 'utils/constants';

const DEFAULT_INIT = { name: undefined, file: null, data: null };

const ConnectBindings = ({
	bindings,
	setBindings,
	closePanel,
	init = DEFAULT_INIT,
	deletable,
}) => {
	const [name, setName] = useState(init.name);
	const [nameError, setNameError] = useState(false);
	const [file, setFile] = useState(init.file);
	const [data, setData] = useState(init.value);
	const [displayResults, setDisplayResults] = useState(false);

	const handleName = (e) => {
		const newName = e.target.value;
		setName(newName);
		if (nameError && !bindings[newName]) setNameError(false);
		if (newName !== init.name && bindings[newName]) setNameError(true);
		setDisplayResults(false);
	};

	const handleData = (d) => {
		setData(d);
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
				[name.replace(/ /g, '_')]: { type: LOCAL_JSON, value: data, file },
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
					label="View"
					action={onView}
					disabled={data && name && !nameError ? false : true}
					col={3}
				/>
			</div>
			{displayResults && (
				<>
					<ViewTable vtlJson={data} />
					<div className="row">
						<Button label="Save" action={onSave} col={3} />
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
			)}
			{!displayResults && (
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
			)}
			<ReactTooltip place="bottom" id="shape" type="info" effect="solid">
				<pre>{JSON.stringify(connectExample, null, 4)}</pre>
			</ReactTooltip>
		</>
	);
};

export default ConnectBindings;
