import React, { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthenticatedFetch } from 'utils/hooks';
import { Button, Loading } from '@inseefr/wilco';
import DataTable from 'components/common/data-table';
import Alert from 'components/common/alert';
import { getSparkType, getMode } from 'utils/spark-type';

const S3View = ({
	connectorType,
	disabledCondition,
	bodyKey,
	...configuration
}) => {
	const { pathname } = useLocation();
	const [results, setResults] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const authFetch = useAuthenticatedFetch();

	const onView = useCallback(() => {
		setLoading(true);
		if (error) setError(false);
		authFetch(
			`connect?mode=${getMode(pathname)}&type=${getSparkType(
				pathname
			)}&connectorType=${connectorType}`,
			{ [bodyKey]: { config: configuration } },
			'POST'
		)
			.then((res) => {
				if (!res.ok) setError(true);
				return res.json();
			})
			.then((res) => {
				setResults(res);
				setLoading(false);
			});
	}, [configuration]);

	if (loading) return <Loading />;

	return (
		<>
			{results && !error && <DataTable vtlJson={results} />}
			{error && <Alert label="Bad configuration" variant="danger" />}
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

export default S3View;
