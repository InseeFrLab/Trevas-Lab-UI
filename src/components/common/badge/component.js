import React from 'react';
import { EyeIcon } from 'components/common/icons';
import './badge.scss';

const CustomBadge = ({ onClick, label, color }) => (
	<div onClick={onClick} style={{ background: color }} className="vtl-badge">
		{label}
		<EyeIcon />
	</div>
);

export default CustomBadge;
