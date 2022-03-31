import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { UUID_State } from 'store';
import Header from 'components/common/header';
import Configuration from '../configuration';
import InMemoryComponent from './main';
import { useAuthenticatedFetch } from 'utils/hooks';
import { IN_MEMORY, LOCAL_JSON, JDBC, LOCAL } from 'utils/constants';

const mode = IN_MEMORY;
const context = LOCAL;

const InMemory = () => {
	const [vtl, setVtl] = useState('');
	const [errors, setErrors] = useState([]);
	const [loadingPost, setLoadingPost] = useState(false);
	const [bindings, setBindings] = useState({});
	const [res, setRes] = useState(null);
	const [apiError, setApiError] = useState('');
	const [UUID, setUUID] = useRecoilState(UUID_State);
	const [currentJobId, setCurrentJobId] = useState('');

	const onChangeScript = (e) => {
		setVtl(e);
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
			{ vtlScript: vtl, toSave: {}, ...formatedBindings },
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
	}, [authFetch, bindings, vtl, setUUID]);

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
				label={'WIP In Memory'}
				disableExecution={
					errors.length > 0 || !vtl || Object.values(bindings).length === 0
				}
				getRes={getRes}
				noReturn
			/>
			<Configuration
				script={vtl}
				setScript={setVtl}
				bindings={bindings}
				setBindings={setBindings}
				hasScriptErrors={errors.length > 0}
			/>
			<InMemoryComponent
				script={vtl}
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
