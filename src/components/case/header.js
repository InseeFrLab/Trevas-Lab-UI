import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, PageTitle } from '@inseefr/wilco';

const Header = ({ label, errors, getRes }) => {
	const { goBack } = useHistory();
	return (
		<div className="row header">
			<div className="col-md-3 header-item">
				<Button label="Return" action={() => goBack()} col={12} />
			</div>
			<div className="col-md-6 header-item">
				<PageTitle title={`VTL Lab: ${label}`} />
			</div>
			<div className="col-md-3 header-item">
				<Button
					label="Execute"
					action={getRes}
					col={12}
					disabled={errors.length !== 0}
				/>
			</div>
		</div>
	);
};

export default Header;
