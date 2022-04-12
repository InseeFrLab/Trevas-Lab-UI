import React from 'react';
import Header from 'components/common/header';
import {
	SPARK_LOCAL_PATH,
	SPARK_STATIC_PATH,
	SPARK_KUBERNETES_PATH,
} from 'utils/constants';

const getLabel = (pathname) => {
	switch (pathname) {
		case SPARK_LOCAL_PATH:
			return 'Spark local execution';
		case SPARK_STATIC_PATH:
			return 'Spark static execution';
		case SPARK_KUBERNETES_PATH:
			return 'Spark kubernetes execution';
		default:
			return 'Spark execution';
	}
};

const SparkHeader = ({ script, pathname, errors, bindings, getRes }) => (
	<Header
		label={getLabel(pathname)}
		disableExecution={
			errors.length > 0 || !script || Object.values(bindings).length === 0
		}
		getRes={getRes}
		noReturn
	/>
);

export default SparkHeader;
