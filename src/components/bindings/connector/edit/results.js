import React, { useEffect, useState } from 'react';
import { Button, Loading } from '@inseefr/wilco';
import DataTable from 'components/common/data-table';
import { useAuthenticatedFetch } from 'utils/hooks';

const EditViewResults = ({
	onSave,
	closePanel,
	dbtype,
	url,
	query,
	user,
	password,
	deletable,
	onDelete,
}) => {
	const [results, setResults] = useState(null);

	const authFetch = useAuthenticatedFetch();

	useEffect(() => {
		authFetch(`jdbc`, { dbtype, url, query, user, password }, 'POST')
			.then((res) => {
				if (res.ok) return res.json();
				else throw new Error('');
			})
			.then((res) => {
				setResults(res);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dbtype, url, query, user, password]);

	if (!results) return <Loading />;

	return (
		<>
			<DataTable vtlJson={results} />
			<div className="row">
				<Button label="Save" action={onSave} col={3} />
				<Button label="Cancel" action={closePanel} col={3} />
				{deletable && <Button label="Delete" action={onDelete} col={3} />}
			</div>
		</>
	);
};

export default EditViewResults;
