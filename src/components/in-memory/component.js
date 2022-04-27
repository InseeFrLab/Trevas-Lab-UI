import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { UUID_State, IN_MEMORY_SCRIPT, IN_MEMORY_BINDINGS } from 'store';
import Header from 'components/common/header';
import Configuration from '../configuration';
import InMemoryComponent from './main';
import { useAuthenticatedFetch } from 'utils/hooks';
import { IN_MEMORY, LOCAL_JSON, JDBC, LOCAL } from 'utils/constants';

const mode = IN_MEMORY;
const context = LOCAL;

const InMemory = () => {
	const [script, setScript] = useRecoilState(IN_MEMORY_SCRIPT);
	const [errors, setErrors] = useState([]);
	const [loadingPost, setLoadingPost] = useState(false);
	const [bindings, setBindings] = useRecoilState(IN_MEMORY_BINDINGS);
	const [res, setRes] = useState(null);
	const [apiError, setApiError] = useState('');
	const [UUID, setUUID] = useRecoilState(UUID_State);
	const [currentJobId, setCurrentJobId] = useState('');

	const onChangeScript = (e) => {
		setScript(e);
		setRes(null);
		setApiError('');
	};

	const onChangeBindings = (e) => {
		setBindings(e);
		setRes(null);
		setApiError('');
	};

	const authFetch = useAuthenticatedFetch();

	const getRes = useCallback(() => {
		setRes(null);
		setLoadingPost(true);
		const formatedBindings = Object.entries(bindings).reduce(
			(acc, [k, v]) => {
				const { type, ...rest } = v;
				if (type === LOCAL_JSON) {
					const { bindings } = acc;
					return { ...acc, bindings: { ...bindings, [k]: v.value } };
				}
				if (type === JDBC) {
					const { queriesForBindings } = acc;
					return {
						...acc,
						queriesForBindings: { ...queriesForBindings, [k]: rest },
					};
				}
				return acc;
			},
			{ bindings: {}, queriesForBindings: {} }
		);

		authFetch(
			`execute?mode=${mode}&type=${context}`,
			{ vtlScript: script, toSave: {}, ...formatedBindings },
			'POST'
		)
			.then((res) => {
				if (res.ok) return res.text();
				return res.json();
			})
			.then((res) => {
				if (res.error) setApiError(res.error);
				else {
					//TODO: fix to delete replace
					const r = res.replace(/"/g, '');
					setUUID(r);
					setCurrentJobId(r);
				}
			})
			.catch((e) => {
				setApiError(e);
			});
	}, [authFetch, bindings, script, setUUID]);

	useEffect(() => {
		if (UUID === null && currentJobId) {
			authFetch(`job/${currentJobId}/bindings`)
				.then((r) => r.json())
				.then((r) => {
					setRes(r);
				})
				.then(() => {
					setLoadingPost(false);
				})
				.then(() => {
					setCurrentJobId('');
				});
		}
	}, [UUID, authFetch, currentJobId]);

	return (
		<div className="container">
			<Header
				label={'In Memory execution'}
				disableExecution={errors.length > 0 || !script}
				getRes={getRes}
				noReturn
			/>
			<Configuration
				script={script}
				setScript={setScript}
				bindings={bindings}
				setBindings={setBindings}
				hasScriptErrors={errors.length > 0}
			/>
			<InMemoryComponent
				script={script}
				setScript={onChangeScript}
				setErrors={setErrors}
				// variableURLs={urls}
				bindings={bindings}
				setBindings={onChangeBindings}
				res={res}
				loadingPost={loadingPost}
				apiError={apiError}
			/>
		</div>
	);
};

export default InMemory;
