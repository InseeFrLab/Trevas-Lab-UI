import React, { useState, useEffect } from 'react';
import { useAuthenticatedFetch } from 'utils/hooks';
import { Button, Loading } from '@inseefr/wilco';
import DataTable from 'components/common/data-table';
import { S3 } from 'utils/constants';

const ConnectS3ViewResults = ({
	fileType,
	url,
	onSave,
	closePanel,
	deletable,
	onDelete,
}) => {
	const [results, setResults] = useState(null);

	const authFetch = useAuthenticatedFetch();

	useEffect(() => {
		authFetch(`${S3}`, { fileType, url }, 'POST')
			.then((res) => {
				if (res.ok) return res.text();
				return res.json();
			})
			.then((res) => {
				setResults(res);
			});
	}, [authFetch, fileType, url]);

	if (!results) return <Loading />;

	return (
		<>
			<DataTable vtlJson={results} />
			<div className="row">
				<Button label="Save" action={onSave} col={3} />
				<Button label="Cancel" action={closePanel} col={3} />
				{deletable && (
					<Button
						label="Delete"
						action={onDelete}
						col={3}
						classes={['wilco-btn-red']}
					/>
				)}
			</div>
		</>
	);
};

export default ConnectS3ViewResults;
