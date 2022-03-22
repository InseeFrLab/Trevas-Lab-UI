import React from 'react';
import Connect from './connect';
import Edit from './edit';
import { JDBC, LOCAL_JSON } from 'utils/constants';

const Connector = ({ type, init, bindings, setBindings, closePanel }) => {
	const updatedType = type || bindings[init.name]?.type;
	if (updatedType === LOCAL_JSON)
		return (
			<Connect
				init={init}
				bindings={bindings}
				setBindings={setBindings}
				closePanel={closePanel}
			/>
		);
	if (updatedType === JDBC)
		return (
			<Edit
				init={init}
				bindings={bindings}
				setBindings={setBindings}
				closePanel={closePanel}
			/>
		);
	return null;
};

export default Connector;
