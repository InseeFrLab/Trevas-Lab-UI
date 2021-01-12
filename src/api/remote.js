import { IN_JS } from 'utils/constants';
import { getEnvVar } from 'utils/env';

export const putVTL = (vtl, bindings, context) =>
	context === IN_JS
		? putVTLInJs
		: fetch(`${getEnvVar('API_BASE_URL')}/api/vtl/${context}`, {
				method: 'POST',
				body: JSON.stringify({ vtlScript: vtl, bindings }),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
		  });

const putVTLInJs = () => 'TODO';
