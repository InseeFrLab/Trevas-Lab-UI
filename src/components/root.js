import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { secure } from './auth';
import Menu from './common/menu';
import { V2InMemory, V2Spark } from './v2';
import { CLUSTER_KUBERNETES_PATH, IN_MEMORY_PATH } from 'utils/constants';

const Root = () => {
	const { pathname } = useLocation();
	return (
		<>
			<Menu />
			<Switch>
				<Route
					exact
					path={`${IN_MEMORY_PATH}`}
					component={secure(V2InMemory)}
				/>
				<Route
					exact
					path={`${CLUSTER_KUBERNETES_PATH}`}
					component={secure(V2Spark)}
				/>
				{!pathname.startsWith('/authentication') && (
					<Redirect to={`${IN_MEMORY_PATH}`} />
				)}
			</Switch>
		</>
	);
};

export default Root;
