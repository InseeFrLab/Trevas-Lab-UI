import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import Error from 'components/common/error';
import { Loading } from '@inseefr/wilco';
import Case from './component';
import { getEnvVar } from 'utils/env';

const CaseContainer = () => {
	const { data: config, error } = useSWR(getEnvVar('CONFIGURATION_URL'));
	const { app, context } = useParams();

	if (error) return <Error />;
	if (!config) return <Loading text="Loading..." />;

	return (
		<Case config={config.find(({ id }) => id === app)} context={context} />
	);
};

export default CaseContainer;
