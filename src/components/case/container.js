import React from 'react';
import useSWR from 'swr';
import { useParams, Redirect } from 'react-router-dom';
import Error from 'components/common/error';
import { Loading } from '@inseefr/wilco';
import Case from './component';
import { getEnvVar } from 'utils/env';
import { EMPTY_CONFIG } from 'utils/constants';

const CaseContainer = () => {
	const { data: config, error } = useSWR(getEnvVar('CONFIGURATION_URL'));
	const { app, context } = useParams();

	if (!getEnvVar('CONFIGURATION_URL'))
		return <Case config={EMPTY_CONFIG} context={context} />;

	if (error) return <Error />;
	if (!config) return <Loading text="Loading..." />;

	const caseConfig = [...config, EMPTY_CONFIG].find(({ id }) => id === app);

	if (!caseConfig) return <Redirect to={`/${context}`} />;

	return <Case config={caseConfig} context={context} />;
};

export default CaseContainer;
