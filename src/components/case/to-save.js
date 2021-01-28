import React from 'react';
import Table from 'components/common/table';
import { SPARK_KUBE, SPARK_STATIC } from 'utils/constants';

const ToSave = ({ toSave, setToSave, context }) =>
	[SPARK_STATIC, SPARK_KUBE].includes(context) ? (
		<>
			<h2>Datasets to save</h2>
			<Table
				bindings={toSave}
				setBindings={(d) =>
					setToSave(
						d.reduce(
							(acc, { name, source }) => ({ ...acc, [name]: source }),
							{}
						)
					)
				}
			/>
		</>
	) : null;

export default ToSave;
