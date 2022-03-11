import React from 'react';
import { Button } from '@inseefr/wilco';
import DataTable from 'components/common/data-table';

const Show = ({ result, onClose }) => {
	if (!result) return null;
	return (
		<>
			<DataTable vtlJson={result} />
			<div className="row">
				<Button label="Close" action={onClose} col={3} />
			</div>
		</>
	);
};

export default Show;
