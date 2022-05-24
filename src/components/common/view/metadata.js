import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
	{
		name: 'Variable',
		colName: 'name',
		selector: (r) => r.name,
		sortable: true,
	},
	{
		name: 'Type',
		colName: 'type',
		selector: (r) => r.type,
		sortable: true,
	},
	{
		name: 'Role',
		colName: 'role',
		selector: (r) => r.role,
		sortable: true,
	},
];

const Metadata = ({ structure }) => {
	return (
		<DataTable
			columns={columns}
			data={structure}
			pagination
			paginationPerPage={5}
			paginationRowsPerPageOptions={[5, 10, 50]}
		/>
	);
};

export default Metadata;
