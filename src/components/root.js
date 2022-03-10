import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { secure } from './auth';
import Menu from './common/menu';
import Home from './home';
import WipComponent from './wip';
import Case from './case';
import CsvToParquet from './build-parquet';
import { IN_MEMORY, WIP } from 'utils/constants';

const Root = () => {
	const { pathname } = useLocation();
	return (
		<>
			<Menu />
			<Switch>
				<Route exact path="/build-parquet" component={CsvToParquet} />
				<Route exact path="/:context" component={Home} />
				<Route
					exact
					path={`/${WIP}/case/:app`}
					component={secure(WipComponent)}
				/>
				<Route exact path="/:context/case/:app" component={secure(Case)} />
				{!pathname.startsWith('/authentication') && (
					<Redirect to={`/${IN_MEMORY}`} />
				)}
			</Switch>
		</>
	);
};

export default Root;
