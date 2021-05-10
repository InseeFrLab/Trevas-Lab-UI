import React from 'react';
import { useLocation } from 'react-router-dom';
import { Menu as WilcoMenu } from '@inseefr/wilco';
import { getEnvVar } from 'utils/env';
import {
	IN_MEMORY,
	SPARK_LOCAL,
	SPARK_STATIC,
	SPARK_KUBE,
} from 'utils/constants';

const paths = [
	{ label: 'In Memory', path: `/${IN_MEMORY}` },
	{ label: 'Spark - Local', path: `/${SPARK_LOCAL}` },
	{ label: 'Spark - Static', path: `/${SPARK_STATIC}` },
	{ label: 'Spark - Kube', path: `/${SPARK_KUBE}` },
	{ label: 'Build Parquet', path: '/build-parquet', alignToRight: true },
	{ label: 'In Js', path: '/in-js', alignToRight: true },
];

const Menu = () => {
	const { pathname } = useLocation();

	const realPaths = paths
		.filter(({ path }) =>
			getEnvVar('MODULES').split(',').includes(path.replace('/', ''))
		)
		.map((p) =>
			pathname === p.path || pathname.startsWith(`${p.path}/`)
				? { ...p, className: 'active' }
				: p
		);
	return <WilcoMenu paths={realPaths} />;
};

export default Menu;
