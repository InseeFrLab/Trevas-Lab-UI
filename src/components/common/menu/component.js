import React from 'react';
import { useLocation } from 'react-router-dom';
import { Menu as WilcoMenu } from '@inseefr/wilco';
import { getEnv } from 'env';
import { IN_MEMORY_PATH, SPARK_PATH } from 'utils/constants';
import './menu.scss';

const paths = [
	{ label: 'In Memory', path: `${IN_MEMORY_PATH}` },
	{
		label: 'Spark',
		path: `${SPARK_PATH}`,
	},
];

const Menu = () => {
	const { pathname } = useLocation();

	const realPaths = paths
		.filter(({ path }) =>
			getEnv()['MODULES'].split(',').includes(path.substring(1))
		)
		.map((p) =>
			pathname === p.path || pathname.startsWith(`${p.path}/`)
				? { ...p, className: 'active' }
				: p
		);

	return (
		<div className="menu-container">
			<WilcoMenu paths={realPaths} home={{ label: 'Home', path: '/' }} />
		</div>
	);
};

export default Menu;
