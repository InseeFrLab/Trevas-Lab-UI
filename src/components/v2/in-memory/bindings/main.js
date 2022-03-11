import React, { useState } from 'react';
import { Button } from '@inseefr/wilco';
import SlidingPanel from 'components/common/sliding-panel';
import ConnectBindings from './connect';
import BindingList from './list';

const MainBindings = ({ bindings, setBindings }) => {
	const [openConnect, setOpenConnect] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);

	const connectOnClick = () => {
		setOpenConnect(true);
	};

	const editOnClick = () => {
		setOpenEdit(true);
	};

	return (
		<>
			<div className="row justify-content-center">
				<Button label="Connect" action={connectOnClick} />
				<Button label="Edit" action={editOnClick} />
			</div>
			<div className="row">
				<BindingList bindings={bindings} setBindings={setBindings} />
			</div>
			<SlidingPanel
				title="Connect bindings"
				open={openConnect}
				setOpen={setOpenConnect}
				width={'70%'}
			>
				<ConnectBindings
					bindings={bindings}
					setBindings={setBindings}
					closePanel={() => setOpenConnect(false)}
				/>
			</SlidingPanel>
			<SlidingPanel
				title="Edit bindings"
				open={openEdit}
				setOpen={setOpenEdit}
				width={'50%'}
			>
				<h3>Coming soon...</h3>
				<div className="row">
					<Button
						label="Cancel"
						action={() => {
							setOpenEdit(false);
						}}
						col={3}
					/>
				</div>
			</SlidingPanel>
		</>
	);
};

export default MainBindings;
