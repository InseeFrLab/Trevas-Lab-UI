import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { Loading, PageTitle, SearchableList } from '@inseefr/wilco';
import Error from 'components/common/error';
import { getEnvVar } from 'utils/env';

const Home = () => {
	const { data: config, error } = useSWR(getEnvVar('CONFIGURATION_URL'));
	const { context } = useParams();

	if (error) return <Error />;
	if (!config) return <Loading text="Loading..." />;

	const filteredConfig = config.filter(({ scope }) => scope.includes(context));
	return (
		<div className="container">
			<PageTitle title="POC VTL" />
			<SearchableList
				items={filteredConfig}
				col={6}
				colOff={3}
				childPath={`${context}/case`}
				autoFocus={true}
			/>
		</div>
	);
};

export default Home;
