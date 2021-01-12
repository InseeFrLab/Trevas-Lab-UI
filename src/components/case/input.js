import React from 'react';
import JSONEditor from 'components/common/json-editor';
import Table from 'components/common/table';
import { IN_MEMORY } from 'utils/constants';

const Input = ({ bindings, setBindings, setRes, context }) => (
	<>
		<h2>Bindings</h2>
		{context === IN_MEMORY ? (
			<JSONEditor
				json={bindings}
				onChange={(e) => {
					setBindings(e);
					setRes(null);
				}}
				mode="tree"
			/>
		) : (
			<Table
				bindings={bindings}
				setBindings={(d) =>
					setBindings(
						d.reduce(
							(acc, { name, source }) => ({ ...acc, [name]: source }),
							{}
						)
					)
				}
			/>
		)}
	</>
);

export default Input;
