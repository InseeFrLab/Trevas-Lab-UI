import { useAuth } from './auth';
import { getEnvVar } from 'utils/env';

const defaultHeaders = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

export const useAuthenticatedFetch = () => {
	const { authType, oidcUser } = useAuth();
	if (authType === 'NONE')
		return (urlPath = '', body = {}, method = 'GET') =>
			fetch(`${getEnvVar('API_BASE_URL')}/api/vtl/${urlPath}`, {
				method,
				body: JSON.stringify(body),
				headers: defaultHeaders,
			});
	if (authType === 'OIDC') {
		const token = oidcUser?.access_token;
		return (urlPath = '', body = {}, method = 'GET') =>
			fetch(`${getEnvVar('API_BASE_URL')}/api/vtl/${urlPath}`, {
				method,
				body: JSON.stringify(body),
				headers: { ...defaultHeaders, Authorization: `Bearer ${token}` },
			});
	}
	throw new Error(`Auth type ${authType} is nor recognized`);
};
