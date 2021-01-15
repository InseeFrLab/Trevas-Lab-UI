import React from 'react';
import { useLocation } from 'react-router-dom';
import { Menu as WilcoMenu } from '@inseefr/wilco';
import { getEnv } from 'utils/env';
import { IN_MEMORY, SPARK_CLUSTER, SPARK_LOCAL } from 'utils/constants';

const paths = [
	{ label: 'In Memory', path: `/${IN_MEMORY}` },
	{ label: 'Spark - Local', path: `/${SPARK_LOCAL}` },
	{ label: 'Spark - Cluster', path: `/${SPARK_CLUSTER}` },
	{ label: 'In Js', path: '/in-js', alignToRight: true },
];

const Menu = () => {
	const { pathname } = useLocation();
	const realPaths = paths
		.map((p) =>
			pathname === p.path || pathname.startsWith(`${p.path}/`)
				? { ...p, className: 'active' }
				: p
		)
		.filter(
			({ path }) => path !== `/${SPARK_LOCAL}` || getEnv() !== 'production'
		);
	return <WilcoMenu paths={realPaths} />;
};

export default Menu;
