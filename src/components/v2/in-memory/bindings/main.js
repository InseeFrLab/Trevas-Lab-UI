import React, { useState } from 'react';
import { Button } from '@inseefr/wilco';
import SlidingPanel from 'components/common/sliding-panel';
import Connector from './connector';
import BindingList from './list';
import { LOCAL_JSON, JDBC } from 'utils/constants';

const MainBindings = ({ bindings, setBindings }) => {
	const [openConnector, setOpenConnector] = useState(false);
	const [bindingType, setBindingType] = useState(null);

	const onClick = (t) => {
		setOpenConnector(true);
		setBindingType(t);
	};

	return (
		<>
			<div className="row justify-content-center">
				<Button label="Connect" action={() => onClick(LOCAL_JSON)} />
				<Button label="Edit" action={() => onClick(JDBC)} />
			</div>
			<div className="row">
				<BindingList bindings={bindings} setBindings={setBindings} />
			</div>
			<SlidingPanel
				title="Binding definition"
				open={openConnector}
				setOpen={setOpenConnector}
				width={'70%'}
			>
				<Connector
					type={bindingType}
					bindings={bindings}
					setBindings={setBindings}
					closePanel={() => setOpenConnector(false)}
				/>
			</SlidingPanel>
		</>
	);
};

export default MainBindings;
