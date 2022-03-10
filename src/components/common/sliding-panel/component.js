import React from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

const CustomSlidingPanel = ({
	children,
	open,
	setOpen,
	title,
	width = '50%',
}) => {
	return (
		<SlidingPane
			className="some-custom-class"
			overlayClassName="some-custom-overlay-class"
			isOpen={open}
			title={title}
			width={width}
			onRequestClose={() => {
				setOpen(false);
			}}
		>
			{children}
		</SlidingPane>
	);
};

export default CustomSlidingPanel;
