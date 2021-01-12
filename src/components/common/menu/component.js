import React from 'react';
import { useLocation } from 'react-router-dom';
import { Menu as WilcoMenu } from '@inseefr/wilco';

const paths = [
	{ label: 'In Memory', path: '/in-memory' },
	{ label: 'Spark - Local', path: '/spark' },
	{ label: 'Spark - Cluster', path: '/spark-cluster' },
	{ label: 'In Js', path: '/in-js', alignToRight: true },
];

const Menu = () => {
	const { pathname } = useLocation();
	const realPaths = paths.map((p) =>
		pathname === p.path || pathname.startsWith(`${p.path}/`)
			? { ...p, className: 'active' }
			: p
	);
	return <WilcoMenu paths={realPaths} />;
};

export default Menu;
