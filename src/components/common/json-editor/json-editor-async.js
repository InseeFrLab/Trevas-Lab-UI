import React, { Suspense, lazy } from 'react';
import { Loading } from '@inseefr/wilco';

const JSONEditor = lazy(() => import('./json-editor.component'));

const AsyncEditor = (props) => (
	<Suspense fallback={<Loading />}>
		<JSONEditor {...props} />
	</Suspense>
);

export default AsyncEditor;
