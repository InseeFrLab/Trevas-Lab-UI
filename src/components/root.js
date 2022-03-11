import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { secure } from './auth';
import Menu from './common/menu';
import Home from './home';
import { V2InMemory } from './v2';
import Case from './case';
import CsvToParquet from './build-parquet';
import { IN_MEMORY, V2_IN_MEMORY } from 'utils/constants';

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
					path={`/${V2_IN_MEMORY}/case/:app`}
					component={secure(V2InMemory)}
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
