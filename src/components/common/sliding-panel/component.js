import React from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

const CustomSlidingPanel = ({
	children,
	open,
	setOpen,
	title,
	width = '50%',
	from = 'right',
}) => {
	return (
		<SlidingPane
			isOpen={open}
			title={title}
			width={width}
			onRequestClose={() => {
				setOpen(false);
			}}
			from={from}
		>
			{children}
		</SlidingPane>
	);
};

export default CustomSlidingPanel;
