import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { UUID_State } from 'store';
import Header from '../../case/header';
import Configuration from '../configuration';
import V2SparkComponent from './main';
import { useAuthenticatedFetch } from 'utils/hooks';
import { JDBC, LOCAL, S3, SPARK } from 'utils/constants';

const V2Spark = () => {
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
				if (type === S3) {
					const { bindings } = acc;
					return { ...acc, s3ForBindings: { ...bindings, [k]: rest } };
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
			{ bindings: {}, s3ForBindings: {} }
		);
		// TEMP
		const mode = SPARK;
		const context = LOCAL;
		// TEMP end

		authFetch(
			`v2/execute?mode=${mode}&type=${context}`,
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
			authFetch(`v2/job/${currentJobId}/bindings`)
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
				label={'WIP Spark'}
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
			<V2SparkComponent
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

export default V2Spark;
