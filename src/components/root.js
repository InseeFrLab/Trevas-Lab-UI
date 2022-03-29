import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { secure } from './auth';
import Menu from './common/menu';
import Home from './home';
import { V2InMemory, V2Spark } from './v2';
import Case from './case';
import CsvToParquet from './build-parquet';
import { IN_MEMORY, SPARK_KUBE, V2_MEMORY } from 'utils/constants';

const Root = () => {
	const { pathname } = useLocation();
	return (
		<>
			<Menu />
			<Switch>
				<Route exact path="/build-parquet" component={CsvToParquet} />
				<Route exact path="/:context" component={Home} />
				<Route exact path={`/v2/${IN_MEMORY}`} component={secure(V2InMemory)} />
				<Route exact path={`/v2/${SPARK_KUBE}`} component={secure(V2Spark)} />
				<Route exact path="/:context/case/:app" component={secure(Case)} />
				{!pathname.startsWith('/authentication') && (
					<Redirect to={`/${V2_MEMORY}`} />
				)}
			</Switch>
		</>
	);
};

export default Root;
