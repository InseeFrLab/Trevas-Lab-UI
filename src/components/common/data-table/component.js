import React from 'react';
import DataTable from 'react-data-table-component';

const Table = ({ vtlJson }) => {
	const { dataStructure, dataPoints } = vtlJson;
	const columns = dataStructure.map(({ name, type, role }) => ({
		name: `${name} (${type} - ${role})`,
		colName: name,
		selector: (r) => r[name],
		sortable: true,
	}));
	const data = dataPoints.map((line) =>
		line.reduce((acc, d, i) => ({ ...acc, [columns[i].colName]: d }), {})
	);

	return (
		<DataTable
			columns={columns}
			data={data}
			pagination
			paginationPerPage={5}
			paginationRowsPerPageOptions={[5, 10, 50]}
		/>
	);
};

export default Table;
