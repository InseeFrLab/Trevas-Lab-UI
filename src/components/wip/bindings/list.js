import React, { useState } from 'react';
import SlidingPanel from 'components/common/sliding-panel';
import ConnectBindings from './connect';
import Badge from 'components/common/badge';
import { LOCAL_JSON, JDBC } from 'utils/constants';

const getColor = (type) => {
	switch (type) {
		case LOCAL_JSON:
			return '#7e375b';
		case JDBC:
			return '#7e375b';
		default:
			break;
	}
};

const BindingList = ({ bindings, setBindings }) => {
	const [view, setView] = useState(null);

	return (
		<>
			{Object.entries(bindings).map(([name, { type }]) => (
				<Badge
					onClick={() => setView(name)}
					key={name}
					label={name}
					color={getColor(type)}
				/>
			))}
			<SlidingPanel
				title={view}
				open={view ? true : false}
				setOpen={setView}
				width={'70%'}
			>
				<ConnectBindings
					setBindings={setBindings}
					closePanel={() => setView(false)}
					init={{ ...bindings[view], name: view }}
				/>
			</SlidingPanel>
		</>
	);
};

export default BindingList;
