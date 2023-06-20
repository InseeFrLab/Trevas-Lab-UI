import React from 'react';
import Header from 'components/common/header';

const SparkHeader = ({ script, errors, getRes }) => (
	<Header
		label={'Spark execution'}
		disableExecution={errors.length > 0 || !script}
		getRes={getRes}
		noReturn
	/>
);

export default SparkHeader;
