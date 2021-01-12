import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Menu from 'components/common/menu';
import Home from './home';
import Case from './case';

const Root = () => (
	<Router>
		<Menu />
		<Switch>
			<Route exact path="/:context">
				<Home />
			</Route>
			<Route exact path="/:context/case/:app">
				<Case />
			</Route>
			<Redirect to="/in-memory" />
		</Switch>
	</Router>
);

export default Root;
