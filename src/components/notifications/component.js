import React, { useState, useEffect } from 'react';
import { useInterval } from 'react-interval-hook';
import Notification from 'components/common/notification';
import { useRecoilState } from 'recoil';
import { UUID_State } from 'store';
import { DONE, FAILED } from 'utils/constants';
import { useAuthenticatedFetch } from 'utils/hooks';

const Notifications = () => {
	const [toDisplay, setToDisplay] = useState({});
	const [UUID, setUUID] = useRecoilState(UUID_State);

	const close = (ds) => {
		const rest = Object.keys(toDisplay).reduce((acc, k) => {
			if (k !== ds) {
				acc[k] = toDisplay[k];
			}
			return acc;
		}, {});
		setToDisplay(rest);
	};

	const authFetch = useAuthenticatedFetch();

	const { start, stop, isActive } = useInterval(() => {
		authFetch(`job/${UUID}`)
			.then((res) => res.json())
			.then((r) => {
				const { status, outputs, error } = r;
				const errorMessage = error?.message;
				if (status === DONE || status === FAILED) {
					setUUID(null);
				}
				const res = { [`Job:${UUID}`]: { status, errorMessage }, ...outputs };
				setToDisplay({ ...toDisplay, ...res });
			});
	}, 1000);

	useEffect(() => {
		if (UUID) {
			start();
		}
		if (!UUID && isActive) stop();
	}, [UUID, isActive, stop, start]);

	return (
		<>
			{Object.entries(toDisplay).map(
				([name, { location, status, errorMessage }], i) => (
					<Notification
						key={i}
						index={i}
						name={name}
						location={location}
						status={status}
						errorMessage={errorMessage}
						close={close}
					/>
				)
			)}
		</>
	);
};

export default Notifications;
