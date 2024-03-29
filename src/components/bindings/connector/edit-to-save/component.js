import React, { useState } from 'react';
import { Button, Input, Select } from '@inseefr/wilco';
import { JDBC_TO_SAVE } from 'utils/constants';

const DEFAULT_INIT = {
	name: undefined,
	dbtype: undefined,
	url: undefined,
	query: undefined,
	user: undefined,
	password: undefined,
};

const DB_OPTIONS = [
	{ value: 'mysql', label: 'MySQL' },
	{ value: 'postgre', label: 'PostgreSQL' },
	{ value: 'sqlserver', label: 'SQL Server' },
];

const EditToSaveBindings = ({
	bindings,
	setBindings,
	closePanel,
	init = DEFAULT_INIT,
	deletable,
	spark,
}) => {
	const [name, setName] = useState(init.name);
	const [nameError, setNameError] = useState(false);
	const [dbtype, setDBType] = useState(init.dbtype);
	const [url, setUrl] = useState(init.url);
	const [table, setTable] = useState(init.table);
	const [user, setUser] = useState(init.user);
	const [password, setPassword] = useState(init.password);

	const handleName = (e) => {
		const newName = e.target.value;
		setName(newName);
		if (nameError && !bindings[newName]) setNameError(false);
		if (newName !== init.name && bindings[newName]) setNameError(true);
	};

	const handleDBType = (d) => {
		setDBType(d);
	};

	const handleUrl = (d) => {
		setUrl(d.target.value);
	};

	const handleTable = (d) => {
		setTable(d.target.value);
	};

	const handleUser = (d) => {
		setUser(d.target.value);
	};

	const handlePassword = (d) => {
		setPassword(d.target.value);
	};

	const onSave = () => {
		setBindings((b) => {
			const { [init.name]: omit, ...others } = b;
			return {
				...others,
				[name.replace(/ /g, '_')]: {
					type: JDBC_TO_SAVE,
					user,
					password,
					url,
					dbtype,
					table,
				},
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
						label="Database type"
						value={DB_OPTIONS.find(({ value }) => value === dbtype)}
						onChange={(e) => handleDBType(e)}
						options={DB_OPTIONS}
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
						placeholder="postgresql-instance:5432/base"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<Input
						label="Table to push results"
						value={table}
						onChange={(e) => handleTable(e)}
						col={12}
						placeholder="my_table"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<Input
						label="User"
						value={user}
						onChange={(e) => handleUser(e)}
						col={12}
					/>
				</div>
				<div className="col-md-6">
					<Input
						label="Password"
						value={password}
						onChange={(e) => handlePassword(e)}
						col={12}
					/>
				</div>
			</div>
			<div className="row">
				<Button
					label="Save"
					action={onSave}
					col={3}
					disabled={!(url && table && user && password && dbtype)}
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

export default EditToSaveBindings;
