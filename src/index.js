import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'components/root';
import { BackToTop } from '@inseefr/wilco';
import 'bootstrap/dist/css/bootstrap.css';
import '@inseefr/wilco/dist/index.css';
import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<Root />
		<BackToTop />
	</React.StrictMode>,
	document.getElementById('root')
);
