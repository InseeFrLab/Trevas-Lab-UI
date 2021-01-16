import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { Loading } from '@inseefr/wilco';
import Home from './component';
import Error from 'components/common/error';
import { getEnvVar } from 'utils/env';
import { EMPTY_CONFIG } from 'utils/constants';
import { sortArray } from 'utils/array';

const sortArrayByLabel = sortArray('label');

const HomeContainer = () => {
	const { data: config, error } = useSWR(getEnvVar('CONFIGURATION_URL'));
	const { context } = useParams();

	if (!getEnvVar('CONFIGURATION_URL'))
		return <Home config={[EMPTY_CONFIG]} context={context} />;

	if (error) return <Error />;
	if (!config) return <Loading text="Loading..." />;

	const filteredConfig = sortArrayByLabel(
		[...config, EMPTY_CONFIG].filter(({ scope }) => scope.includes(context))
	);

	return <Home config={filteredConfig} context={context} />;
};

export default HomeContainer;
