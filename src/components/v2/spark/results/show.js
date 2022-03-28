import React from 'react';
import { Button } from '@inseefr/wilco';

const Show = ({ result, onClose }) => {
	if (!result) return null;
	return (
		<>
			<h3>Coming soon...</h3>
			{/* <DataTable vtlJson={result} /> */}
			<div className="row">
				<Button label="Close" action={onClose} col={3} />
			</div>
		</>
	);
};

export default Show;
