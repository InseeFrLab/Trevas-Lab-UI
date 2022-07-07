import React from 'react';
import Toast from 'react-bootstrap/Toast';
import { DONE, RUNNING, READY, FAILED } from 'utils/constants';
import './notification.scss';

const getMessage = (status, location, errorMessage) => {
	if (!location) return `Job status: ${status}`;
	switch (status) {
		case DONE:
			return `Dataset created at ${location}`;
		case READY:
			return 'Dataset is ready to be created';
		case RUNNING:
			return 'Dataset is creating';
		case FAILED:
			return `Dataset creation has failed: ${errorMessage}`;
		default:
			break;
	}
};

const Notification = ({
	index,
	name,
	location,
	status,
	close,
	errorMessage,
}) => {
	return (
		<div className="vtl-notification">
			<Toast
				style={{
					position: 'absolute',
					top: `${(index + 1) * 70 + 100}px`,
					right: '1em',
					width: errorMessage ? '50em' : '25em',
				}}
				className={`toast-${status.toLowerCase()}`}
				onClose={() => close(name)}
			>
				<Toast.Header>
					<strong className="mr-auto">{name}</strong>
				</Toast.Header>
				<Toast.Body>
					<p>{getMessage(status, location, errorMessage)}</p>
					{errorMessage && <p>{errorMessage}</p>}
				</Toast.Body>
			</Toast>
		</div>
	);
};

export default Notification;
