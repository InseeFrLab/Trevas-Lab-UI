import React from 'react';
import { Button } from '@inseefr/wilco';
import DataTable from 'components/common/data-table';
import { saveAs } from 'file-saver';

const Show = ({ result, onClose, name }) => {
	const onValidateExport = () => {
		const fileToSave = new Blob([JSON.stringify(result, null, 4)], {
			type: 'application/json',
			name,
		});
		saveAs(fileToSave, name);
	};
	if (!result) return null;
	return (
		<>
			<DataTable vtlJson={result} />
			<div className="row">
				<Button label="Export" action={onValidateExport} col={3} />
				<Button label="Close" action={onClose} col={3} />
			</div>
		</>
	);
};

export default Show;
