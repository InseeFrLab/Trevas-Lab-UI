import React from 'react';
import { Button, PageTitle } from '@inseefr/wilco';

const Header = ({ label, errors, getRes }) => (
	<div className="row header">
		<div className="col-md-2 header-item">
			<Button label="Return" action="/" col={12} offset={0} />
		</div>
		<div className="col-md-8 header-item">
			<PageTitle title={`VTL Lab: ${label}`} />
		</div>
		<div className="col-md-2 header-item">
			<Button
				label="Execute"
				action={getRes}
				col={12}
				offset={0}
				disabled={errors.length !== 0}
			/>
		</div>
	</div>
);

export default Header;
