import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { UUID_State } from 'store';
import Header from '../../case/header';
import WipComponent from './main';
import { useAuthenticatedFetch } from 'utils/hooks';
import { IN_MEMORY, LOCAL } from 'utils/constants';

const Wip = () => {
	const [vtl, setVtl] = useState(null);
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
		const updatedBindings = Object.entries(bindings).reduce(
			(acc, [k, v]) => (k && v ? { ...acc, [k]: v.value } : acc),
			{}
		);
		// TEMP
		const mode = IN_MEMORY;
		const context = LOCAL;
		// TEMP end

		authFetch(
			`execute?mode=${mode}&type=${context}`,
			{ vtlScript: vtl, bindings: updatedBindings, toSave: {} },
			'POST'
		)
			.then((res) => res.text())
			.then((res) => {
				//TODO: fix
				const r = res.replace(/"/g, '');
				if (res.error) setApiError(res.error.chars);
				setUUID(r);
				setCurrentJobId(r);
			})
			.then(() => {
				setLoadingPost(false);
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
					setCurrentJobId('');
				});
		}
	}, [UUID, authFetch, currentJobId]);

	return (
		<div className="container">
			<Header
				label={'WIP'}
				disableExecution={
					errors.length > 0 || !vtl || Object.values(bindings).length === 0
				}
				getRes={getRes}
			/>
			<WipComponent
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

export default Wip;
