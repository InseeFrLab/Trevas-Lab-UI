import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { secure } from './auth';
import Menu from './common/menu';
import InMemory from './in-memory';
import Spark from './spark';
import { CLUSTER_KUBERNETES_PATH, IN_MEMORY_PATH } from 'utils/constants';

const Root = () => {
	const { pathname } = useLocation();
	return (
		<>
			<Menu />
			<Switch>
				<Route exact path={`${IN_MEMORY_PATH}`} component={secure(InMemory)} />
				<Route
					exact
					path={`${CLUSTER_KUBERNETES_PATH}`}
					component={secure(Spark)}
				/>
				{!pathname.startsWith('/authentication') && (
					<Redirect to={`${IN_MEMORY_PATH}`} />
				)}
			</Switch>
		</>
	);
};

export default Root;
