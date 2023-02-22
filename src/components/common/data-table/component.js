import React from 'react';
import Alert from 'components/common/alert';
import DataTable from 'react-data-table-component';

const getRoleScore = (role) => {
	switch (role) {
		case 'IDENTIFIER':
			return 1;
		case 'MEASURE':
			return 2;
		default:
			return 10;
	}
};

const Table = ({ vtlJson }) => {
	const { dataStructure, dataPoints } = vtlJson;
	if (!dataStructure || !dataPoints)
		return <Alert label="JSON file content is malformed" variant="danger" />;
	const columns = dataStructure
		.map(({ name, type, role }) => ({
			name: `${name} (${type}${role ? ` - ${role}` : ''})`,
			roleScore: getRoleScore(role),
			colName: name,
			selector: (r) => r[name],
			sortable: true,
		}))
		.sort(
			(
				{ colName: nameA, roleScore: roleScoreA },
				{ colName: nameB, roleScore: roleScoreB }
			) => {
				if (roleScoreA === roleScoreB && nameA > nameB) return 1;
				if (roleScoreA !== roleScoreB)
					return roleScoreA - roleScoreB > 0 ? 1 : -1;
				return -1;
			}
		);
	const data = dataPoints.map((line) =>
		line.reduce(
			(acc, d, i) => ({ ...acc, [dataStructure[i].name]: `${d}` }),
			{}
		)
	);
	// debugger;
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
