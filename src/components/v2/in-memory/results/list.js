import React, { useState } from 'react';
import { Loading } from '@inseefr/wilco';
import SlidingPanel from 'components/common/sliding-panel';
import Show from './show';
import Badge from 'components/common/badge';
import { LOCAL_JSON, JDBC } from 'utils/constants';

const getColor = (type) => {
	switch (type) {
		case LOCAL_JSON:
			return '#7e375b';
		case JDBC:
			return '#7e375b';
		default:
			return '#7e375b';
	}
};

const ResultList = ({ results, loadingPost, apiError }) => {
	const [view, setView] = useState(null);

	if (apiError)
		return (
			<>
				{apiError && (
					<div className="api-error">
						<h2>API Error</h2>
						<div>{apiError}</div>
					</div>
				)}
			</>
		);
	if (loadingPost) return <Loading text="Ongoing treatments" />;
	if (!results) return <div>No results</div>;

	return (
		<>
			<div className="row">
				{Object.entries(results).map(([name, { type }]) => (
					<Badge
						onClick={() => setView(name)}
						key={name}
						label={name}
						color={name === view ? 'red' : getColor(type)}
					/>
				))}
			</div>
			<SlidingPanel
				title={view}
				open={view ? true : false}
				setOpen={setView}
				width={'70%'}
			>
				<Show
					result={results[view]}
					onClose={() => {
						setView(null);
					}}
				/>
			</SlidingPanel>
		</>
	);
};

export default ResultList;
