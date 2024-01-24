import React, { useState } from 'react';
import SlidingPanel from 'components/common/sliding-panel';
import Connector from './connector';
import Badge from 'components/common/badge';

const BindingList = ({ bindings, setBindings }) => {
	const [view, setView] = useState(null);

	return (
		<>
			{Object.entries(bindings).map(([name]) => (
				<Badge
					onClick={() => setView(name)}
					key={name}
					label={name}
					backgroundColor={name === view ? 'red' : '#7e375b'}
					color={name === view ? 'white' : 'white'}
				/>
			))}
			<SlidingPanel
				title={view}
				open={view ? true : false}
				setOpen={setView}
				width={'70%'}
			>
				<Connector
					bindings={bindings}
					setBindings={setBindings}
					closePanel={() => setView(false)}
					init={{ ...bindings[view], name: view }}
					deletable
				/>
			</SlidingPanel>
		</>
	);
};

export default BindingList;
