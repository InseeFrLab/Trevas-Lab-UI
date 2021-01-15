import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { secure } from './auth';
import Menu from './common/menu';
import Home from './home';
import Case from './case';

const Root = () => {
	const { pathname } = useLocation();
	return (
		<>
			<Menu />
			<Switch>
				<Route exact path="/:context" component={Home} />
				<Route exact path="/:context/case/:app" component={secure(Case)} />
				{!pathname.startsWith('/authentication') && (
					<Redirect to="/in-memory" />
				)}
			</Switch>
		</>
	);
};

export default Root;
