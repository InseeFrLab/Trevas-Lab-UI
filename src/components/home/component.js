import React from 'react';
import { PageTitle, SearchableList } from '@inseefr/wilco';

const Home = ({ config, context }) => (
	<div className="container">
		<PageTitle title="VTL Lab" />
		<SearchableList
			items={config}
			col={6}
			colOff={3}
			childPath={`${context}/case`}
			autoFocus={true}
		/>
	</div>
);

export default Home;
