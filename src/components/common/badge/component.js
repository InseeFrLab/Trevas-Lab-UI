import React from 'react';
import { EyeIcon } from 'components/common/icons';
import './badge.scss';

const CustomBadge = ({
	onClick,
	label,
	backgroundColor = '#7e375b',
	color = 'white',
}) => (
	<div
		onClick={onClick}
		style={{ background: backgroundColor, color }}
		className="vtl-badge"
	>
		{label}
		<EyeIcon color={color} />
	</div>
);

export default CustomBadge;
