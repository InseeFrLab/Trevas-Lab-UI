import React, { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthenticatedFetch } from 'utils/hooks';
import { Button, Loading } from '@inseefr/wilco';
import ViewTable from 'components/common/view';
import Alert from 'components/common/alert';
import { getSparkType, getMode } from 'utils/spark-type';

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

	const authFetch = useAuthenticatedFetch();

	const onView = useCallback(() => {
		setLoading(true);
		if (error) setError('');
		authFetch(
			`connect?mode=${getMode(pathname)}&type=${getSparkType(
				pathname
			)}&connectorType=${connectorType}`,
			{ [bodyKey]: { config: configuration } },
			'POST'
		)
			.then((res) => {
				if (!res.ok) setError('Bad configuration');
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
	}, [configuration, authFetch, bodyKey, connectorType, error, pathname]);

	if (loading) return <Loading />;

	return (
		<>
			{results && !error && <ViewTable vtlJson={results} />}
			{error && <Alert label={error} variant="danger" />}
			<div className="row">
				<Button
					label="View"
					action={onView}
					disabled={disabledCondition ? false : true}
					col={3}
				/>
			</div>
		</>
	);
};

export default View;
