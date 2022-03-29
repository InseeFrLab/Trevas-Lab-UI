import { useEffect } from 'react';
import { useAuthenticatedFetch } from 'utils/hooks';

const ConnectS3ViewResults = (settings) => {
	// const [results, setResults] = useState(null);

	const authFetch = useAuthenticatedFetch();

	useEffect(() => {
		authFetch(`v2/s3`, { ...settings }, 'POST').then((res) => {
			if (res.ok) return res.text();
			return res.json();
		});
	}, [authFetch, settings]);

	return null;
};

export default ConnectS3ViewResults;
