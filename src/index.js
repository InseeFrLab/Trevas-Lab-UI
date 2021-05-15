import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/auth';
import Root from 'components/root';
import { BackToTop } from '@inseefr/wilco';
import 'bootstrap/dist/css/bootstrap.css';
import '@inseefr/wilco/dist/index.css';
import './index.scss';
import { getEnv } from 'env';

export const AuthTypeContext = React.createContext();

const authType = getEnv()['AUTH_MODE'];

ReactDOM.render(
	<React.StrictMode>
		<AuthTypeContext.Provider value={authType}>
			<AuthProvider authType={authType}>
				<BrowserRouter>
					<Root />
					<BackToTop />
				</BrowserRouter>
			</AuthProvider>
		</AuthTypeContext.Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
