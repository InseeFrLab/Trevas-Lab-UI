import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { Loading } from '@inseefr/wilco';
import Home from './component';
import Error from 'components/common/error';
import { getEnv } from 'env';
import { EMPTY_CONFIG } from 'utils/constants';
import { sortArray } from 'utils/array';

const sortArrayByLabel = sortArray('label');

const HomeContainer = ({ v }) => {
	const { data: config, error } = useSWR(getEnv()['CONFIGURATION_URL']);
	const { context } = useParams();

	if (!getEnv()['CONFIGURATION_URL'])
		return <Home config={[EMPTY_CONFIG]} context={context} />;

	if (error) return <Error />;
	if (!config) return <Loading text="Loading..." />;

	const filteredConfig = sortArrayByLabel(
		v
			? [EMPTY_CONFIG]
			: [...config, EMPTY_CONFIG]
					.filter(({ scope }) => scope.includes(context))
					.map(({ id, label }) => ({ id, label }))
	);

	return <Home config={filteredConfig} context={context} v={v} />;
};

export default HomeContainer;
