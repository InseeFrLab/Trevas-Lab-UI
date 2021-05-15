import { getEnv } from 'env';

export const buildOidcConfiguration = (baseConfig) => {
	const authority = getEnv()['OIDC_AUTHORITY'];
	const client_id = getEnv()['OIDC_CLIENT_ID'];

	const { origin } = window.location;
	const updatedBaseConfigConfig = Object.entries(baseConfig.config).reduce(
		(acc, [k, v]) => ({
			...acc,
			[k]: typeof v === 'string' ? v.replace('my_origin', origin) : v,
		}),
		{}
	);
	const configuration = {
		...baseConfig,
		origin: window.location.origin,
		config: { ...updatedBaseConfigConfig, authority, client_id },
	};
	return configuration;
};
