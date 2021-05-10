import React, { useState, useCallback } from 'react';
import { Loading } from '@inseefr/wilco';
import Header from './header';
import { useAuthenticatedFetch } from 'utils/hooks';

const BuildParquet = () => {
	const [structure, setStructure] = useState(
		's3a://projet-vtl/build-test/structure.json'
	);
	const [data, setData] = useState('s3a://projet-vtl/build-test/data.csv');
	const [target, setTarget] = useState('s3a://projet-vtl/build-test/result');
	const [loading, setLoading] = useState(false);

	const authFetch = useAuthenticatedFetch();

	const getRes = useCallback(() => {
		setLoading(true);
		authFetch('build-parquet', { structure, data, target }, 'POST')
			// TODO: handle API response
			.then(() => {
				setLoading(false);
			});
	}, [authFetch]);

	if (loading) return <Loading text="Building parquet files..." />;

	return (
		<div className="container">
			<Header
				getRes={getRes}
				disabled={structure.length === 0 || data.length === 0}
			/>
			<div className="row">
				<div className="col-md-6">
					<h2>Structure path (json)</h2>
					<input
						type="text"
						value={structure}
						onChange={(e) => {
							setStructure(e.target.value);
						}}
						style={{ width: '400px' }}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<h2>Data path (csv)</h2>
					<input
						type="text"
						value={data}
						onChange={(e) => {
							setData(e.target.value);
						}}
						style={{ width: '400px' }}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<h2>Target path</h2>
					<input
						type="text"
						value={target}
						onChange={(e) => {
							setTarget(e.target.value);
						}}
						style={{ width: '400px' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default BuildParquet;
