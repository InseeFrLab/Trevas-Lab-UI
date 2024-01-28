import React from 'react';
import Connect from './connect-json';
import Edit from './edit';
import EditToSave from './edit-to-save';
import ConnectS3 from './connect-s3';
import { JDBC, LOCAL_JSON, S3, JDBC_TO_SAVE } from 'utils/constants';

const Connector = ({
	type,
	init,
	bindings,
	setBindings,
	closePanel,
	deletable,
	disableView,
	spark,
	toSave,
	persistentDatasets,
	enablePersistentDatasets,
}) => {
	const updatedType = type || bindings[init.name]?.type;
	if (updatedType === LOCAL_JSON)
		return (
			<Connect
				init={init}
				bindings={bindings}
				setBindings={setBindings}
				closePanel={closePanel}
				deletable={deletable}
			/>
		);
	if (updatedType === JDBC)
		return (
			<Edit
				init={init}
				bindings={bindings}
				setBindings={setBindings}
				closePanel={closePanel}
				deletable={deletable}
				disableView={disableView}
				spark={spark}
			/>
		);
	if (updatedType === JDBC_TO_SAVE)
		return (
			<EditToSave
				init={init}
				bindings={bindings}
				setBindings={setBindings}
				closePanel={closePanel}
				deletable={deletable}
				disableView={disableView}
				spark={spark}
			/>
		);
	if (updatedType === S3)
		return (
			<ConnectS3
				init={init}
				bindings={bindings}
				setBindings={setBindings}
				closePanel={closePanel}
				deletable={deletable}
				disableView={disableView}
				toSave={toSave}
				persistentDatasets={persistentDatasets}
				enablePersistentDatasets={enablePersistentDatasets}
			/>
		);
	return null;
};

export default Connector;
