import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, PageTitle } from '@inseefr/wilco';

const Header = ({ label, disableExecution, getRes, noReturn }) => {
	const { goBack } = useHistory();
	return (
		<div className="row header">
			<div className="col-md-3 header-item">
				{!noReturn && (
					<Button label="Return" action={() => goBack()} col={12} />
				)}
			</div>
			<div className="col-md-6 header-item">
				<PageTitle title={`VTL Lab: ${label}`} />
			</div>
			<div className="col-md-3 header-item">
				<Button
					label="Execute"
					action={getRes}
					col={12}
					disabled={disableExecution}
				/>
			</div>
		</div>
	);
};

export default Header;
