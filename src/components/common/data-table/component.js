import React from 'react';
import Alert from 'components/common/alert';
import DataTable from 'react-data-table-component';

const Table = ({ vtlJson }) => {
	const { dataStructure, dataPoints } = vtlJson;
	if (!dataStructure || !dataPoints)
		return <Alert label="JSON file content is malformed" variant="danger" />;
	const columns = dataStructure.map(({ name, type, role }) => ({
		name: `${name} (${type}${role ? `- ${role}` : ''})`,
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
