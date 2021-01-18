import React, { useState, useEffect } from 'react';
import {
	AuthenticationProvider,
	InMemoryWebStorage,
} from '@axa-fr/react-oidc-context';
import { Loading } from '@inseefr/wilco';
import { buildOidcConfiguration } from 'utils/oidc/build-configuration';

const AuthProviderOIDC = ({ children }) => {
	const [conf, setConf] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${window.location.origin}/oidc.json`)
			.then((r) => r.json())
			.then((r) => {
				setConf(r);
				setLoading(false);
			});
	}, []);

	if (loading) return <Loading text="Authentication..." />;
	return (
		<AuthenticationProvider
			configuration={buildOidcConfiguration(conf).config}
			isEnabled={conf.isEnabled}
			UserStore={InMemoryWebStorage}
			callbackComponentOverride={() => <Loading text="Authentication..." />}
			authenticating={() => <Loading text="Authentication..." />}
			sessionLostComponent={() => <Loading text="Authentication..." />}
		>
			{children}
		</AuthenticationProvider>
	);
};

export default AuthProviderOIDC;
