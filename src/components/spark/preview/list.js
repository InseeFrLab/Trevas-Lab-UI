import React, { useState } from 'react';
import { Loading } from '@inseefr/wilco';
import SlidingPanel from 'components/common/sliding-panel';
import Show from './show';
import Badge from 'components/common/badge';

const getColor = (name) => {
	if (name.includes('$')) return 'white';
	return '#7e375b';
};

const getBackgroundColor = (name) => {
	if (name.includes('$')) return '#7e375b';
	return 'white';
};

const getCleanName = (name) => {
	if (!name.includes('$')) return name;
	return `${name.split('$')[0]} (persistent)`;
};

const PreviewResultList = ({ results, loadingPost, apiError }) => {
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
				{Object.entries(results).map(([name]) => {
					const updatedName = getCleanName(name);
					return (
						<Badge
							onClick={() => setView(name)}
							key={name}
							label={updatedName}
							backgroundColor={name === view ? 'red' : getBackgroundColor(name)}
							color={name === view ? 'white' : getColor(name)}
						/>
					);
				})}
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

export default PreviewResultList;
