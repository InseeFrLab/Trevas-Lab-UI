import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import EditableCell from './editable-cell';
import './table.scss';

const defaultColumn = {
	Cell: EditableCell,
};

const Table = ({ bindings, setBindings }) => {
	const [data, setData] = useState([
		...Object.entries(bindings).map(([name, source]) => ({ name, source })),
		{ name: '', source: '' },
	]);
	const columns = useMemo(
		() => [
			{
				id: 'name',
				Header: 'DS name',
				accessor: 'name',
			},
			{ id: 'source', Header: 'DS source', accessor: 'source' },
		],
		[]
	);

	const addRow = () => {
		setData((old) => [...old, { name: '', source: '' }]);
	};

	const handleChange = (rowIndex, columnId, value) => {
		const updated = data.map((row, index) => {
			if (index === rowIndex) {
				return {
					...data[rowIndex],
					[columnId]: value,
				};
			}
			return row;
		});
		setBindings(updated);
		setData(updated);
	};

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data, defaultColumn, handleChange });

	return (
		<>
			<button type="button" onClick={addRow}>
				Add row
			</button>
			<div className="table">
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>
										{column.render('Header')}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Table;
