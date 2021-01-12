import React from 'react';
import JSONEditor from '../common/json-editor';
import { SPARK_CLUSTER } from 'utils/constants';

const Output = ({ res, context, apiError }) => (
	<>
		{res && (
			<>
				<h2>{`Results${
					context === SPARK_CLUSTER ? ' (dataset length)' : ''
				}`}</h2>
				<JSONEditor json={res} mode="tree" readOnly />
			</>
		)}
		{apiError && (
			<div className="api-error">
				<h2>API Error</h2>
				<div>{apiError}</div>
			</div>
		)}
	</>
);

export default Output;
