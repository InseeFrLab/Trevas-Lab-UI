import React, { useState } from 'react';
import { Button } from '@inseefr/wilco';
import SlidingPanel from 'components/common/sliding-panel';
import Connector from 'components/v2/bindings/connector';
import BindingList from 'components/v2/bindings/list';
import { JDBC, S3 } from 'utils/constants';

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
				<Button label="Connect" action={() => onClick(S3)} />
				<Button label="Edit" action={() => onClick(JDBC)} />
			</div>
			<div className="row">
				<BindingList bindings={bindings} setBindings={setBindings} spark />
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
					spark
				/>
			</SlidingPanel>
		</>
	);
};

export default MainBindings;
