import { useEffect, useState } from 'react';
import { useAuthenticatedFetch } from 'utils/hooks';

const EditResults = (settings) => {
	const [results, setResults] = useState(null);

	const authFetch = useAuthenticatedFetch();

	useEffect(() => {
		authFetch(`v2/jdbc`, { ...settings }, 'POST').then((res) => {
			if (res.ok) return res.text();
			return res.json();
		});
	}, []);

	return null;
};

export default EditResults;
