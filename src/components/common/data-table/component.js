import React from 'react';
import DataTable from 'react-data-table-component';

const Table = ({ vtlJson }) => {
	const { dataStructure, dataPoints } = vtlJson;
	const columns = dataStructure.map(({ name, type, role }) => ({
		name: `${name} (${type} - ${role})`, selector: r=> r[name]
	}));
    const data = 
	return <DataTable columns={columns} data={dataPoints} pagination />;
};

export default Table;
