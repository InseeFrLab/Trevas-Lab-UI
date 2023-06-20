import React, { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthenticatedFetch } from 'utils/hooks';
import { Button, Loading } from '@inseefr/wilco';
import ViewTable from 'components/common/view';
import Alert from 'components/common/alert';
import { getMode } from 'utils/spark-type';

const buildErrorMessage = ({ error, message, trace }) => {
	return (
		<>
			<p>{error}</p>
			<p>{message}</p>
			<p>{trace}</p>
		</>
	);
};

const View = ({
	connectorType,
	disabledCondition,
	bodyKey,
	...configuration
}) => {
	const { pathname } = useLocation();
	const [results, setResults] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [status, setStatus] = useState(null);

	const authFetch = useAuthenticatedFetch();

	const onView = useCallback(() => {
		setLoading(true);
		if (status) setStatus(null);
		authFetch(
			`connect?mode=${getMode(pathname)}&connectorType=${connectorType}`,
			{ [bodyKey]: { config: configuration } },
			'POST'
		)
			.then((res) => {
				setStatus(res.status);
				return res.json();
			})
			.then((res) => {
				setResults(res);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
				setError('Error while fetching server');
			});
	}, [configuration, authFetch, bodyKey, connectorType, pathname, status]);

	if (loading) return <Loading />;

	return (
		<>
			{results && status === 200 && <ViewTable vtlJson={results} />}
			<div className="row">
				<Button
					label="View"
					action={onView}
					disabled={disabledCondition ? false : true}
					col={3}
				/>
			</div>
			{error && <Alert label={error} variant="danger" />}
			{status && status !== 200 && (
				<Alert label={buildErrorMessage(results)} variant="danger" />
			)}
		</>
	);
};

export default View;
