import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { secure } from './auth';
import Menu from './common/menu';
import Home from 'components/home';
import InMemory from './in-memory';
import Spark from './spark';
import { IN_MEMORY_PATH, SPARK_PATH } from 'utils/constants';

const Root = () => {
	const { pathname } = useLocation();
	return (
		<>
			<Menu />
			<Switch>
				<Route exact path={`/`} component={Home} />
				<Route exact path={`${IN_MEMORY_PATH}`} component={secure(InMemory)} />
				<Route exact path={`${SPARK_PATH}`} component={secure(Spark)} />
				{!pathname.startsWith('/authentication') && <Redirect to="/" />}
			</Switch>
		</>
	);
};

export default Root;
