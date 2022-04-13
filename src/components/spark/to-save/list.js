import React from 'react';
import Badge from 'components/common/badge';

const ResultsToSaveList = ({ toSave, view, setView }) => (
	<>
		{Object.entries(toSave).map(([name]) => (
			<Badge
				onClick={() => setView(name)}
				key={name}
				label={name}
				color={name === view ? 'red' : '#7e375b'}
			/>
		))}
	</>
);

export default ResultsToSaveList;
