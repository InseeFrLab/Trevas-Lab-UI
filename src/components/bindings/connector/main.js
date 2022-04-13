import React from 'react';
import Connect from './connect-json';
import Edit from './edit';
import ConnectS3 from './connect-s3';
import { JDBC, LOCAL_JSON, S3 } from 'utils/constants';

const Connector = ({
	type,
	init,
	bindings,
	setBindings,
	closePanel,
	deletable,
	disableView,
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
			/>
		);
	return null;
};

export default Connector;
