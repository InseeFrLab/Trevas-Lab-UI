import React from 'react';
import { PageTitle, SearchableList } from '@inseefr/wilco';

const Home = ({ config, context, v }) => (
	<div className="container">
		<PageTitle title="VTL Lab" />
		<SearchableList
			items={config}
			col={6}
			offset={3}
			childPath={`${v ? 'v2/' : ''}${context}/case`}
			autoFocus={true}
		/>
	</div>
);

export default Home;
