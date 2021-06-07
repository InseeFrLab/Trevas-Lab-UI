import React from 'react';
import Toast from 'react-bootstrap/Toast';
import { DONE, RUNNING, READY, FAILED } from 'utils/constants';
import './notification.scss';

const getMessage = (status, location) => {
	switch (status) {
		case DONE:
			return `Dataset created at ${location}`;
		case READY:
			return 'Dataset is ready to be created';
		case RUNNING:
			return 'Dataset is creating';
		case FAILED:
			return 'Dataset creation has failed';
		default:
			break;
	}
};

const Notification = ({ index, name, location, status, close }) => {
	return (
		<Toast
			style={{
				position: 'absolute',
				top: `${(index + 1) * 50}px`,
				right: '10px',
				width: '20%',
			}}
			className={`toast-${status.toLowerCase()}`}
			onClose={() => close(name)}
		>
			<Toast.Header>
				<strong className="mr-auto">{name}</strong>
			</Toast.Header>
			<Toast.Body>{getMessage(status, location)}</Toast.Body>
		</Toast>
	);
};

export default Notification;
