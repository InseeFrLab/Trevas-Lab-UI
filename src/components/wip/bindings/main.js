import React, { useState } from 'react';
import { Button } from '@inseefr/wilco';
import SlidingPanel from 'components/common/sliding-panel';
import ConnectBindings from './connect';

const MainBindings = ({ setBindings }) => {
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
			<div className="row">
				<Button label="Connect" action={connectOnClick} />
				<Button label="Edit" action={editOnClick} />
			</div>
			<SlidingPanel
				title="Connect bindings"
				open={openConnect}
				setOpen={setOpenConnect}
				width={'40%'}
			>
				<ConnectBindings />
			</SlidingPanel>
			<SlidingPanel
				title="Edit bindings"
				open={openEdit}
				setOpen={setOpenEdit}
				width={'60%'}
			>
				<div>KO</div>
			</SlidingPanel>
		</>
	);
};

export default MainBindings;
