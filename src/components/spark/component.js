import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { UUID_State, SPARK_SCRIPT, SPARK_BINDINGS, SPARK_TO_SAVE } from 'store';
import Header from './header';
import Configuration from '../configuration';
import SparkComponent from './main';
import { useAuthenticatedFetch } from 'utils/hooks';
import * as C from 'utils/constants';
import { getPersistentDatasets } from 'utils/antlr';

const Spark = () => {
	const [script, setScript] = useRecoilState(SPARK_SCRIPT);
	const [errors, setErrors] = useState([]);
	const [loadingPost, setLoadingPost] = useState(false);
	const [bindings, setBindings] = useRecoilState(SPARK_BINDINGS);
	const [bindingLoadingErrors, setBindingLoadingErrors] = useState(false);
	const [toSave, setToSave] = useRecoilState(SPARK_TO_SAVE);
	const [res, setRes] = useState(null);
	const [apiError, setApiError] = useState('');
	const [UUID, setUUID] = useRecoilState(UUID_State);
	const [currentJobId, setCurrentJobId] = useState('');
	const [persistentDatasets, setPersistentDatasets] = useState(() =>
		getPersistentDatasets(script)
	);

	useEffect(() => {
		setPersistentDatasets(getPersistentDatasets(script));
	}, [script]);

	const onChangeScript = (e) => {
		setScript(e);
		setRes(null);
		setApiError('');
		setBindingLoadingErrors(false);
	};

	const onChangeBindings = (e) => {
		setBindings(e);
		setRes(null);
		setApiError('');
		setBindingLoadingErrors(false);
	};

	const authFetch = useAuthenticatedFetch();

	const getRes = useCallback(() => {
		setRes(null);
		setLoadingPost(true);
		const formatedBindings = Object.entries(bindings).reduce(
			(acc, [k, v]) => {
				const { type, ...rest } = v;
				if (type === C.S3) {
					const { s3ForBindings } = acc;
					return { ...acc, s3ForBindings: { ...s3ForBindings, [k]: rest } };
				}
				if (type === C.JDBC) {
					const { queriesForBindings } = acc;
					return {
						...acc,
						queriesForBindings: { ...queriesForBindings, [k]: rest },
					};
				}
				return acc;
			},
			{ queriesForBindings: {}, s3ForBindings: {} }
		);

		//TODO: refactor to avoid duplication
		const formatedToSave = Object.entries(toSave).reduce(
			(acc, [k, v]) => {
				const { type, ...rest } = v;
				if (type === C.S3) {
					const { s3ForBindings } = acc;
					return { ...acc, s3ForBindings: { ...s3ForBindings, [k]: rest } };
				}
				if (type === C.JDBC_TO_SAVE) {
					const { jdbcForBindingsToSave } = acc;
					return {
						...acc,
						jdbcForBindingsToSave: { ...jdbcForBindingsToSave, [k]: rest },
					};
				}
				return acc;
			},
			{ s3ForBindings: {}, jdbcForBindingsToSave: {} }
		);

		authFetch(
			`execute?mode=${C.SPARK}`,
			{ vtlScript: script, toSave: formatedToSave, ...formatedBindings },
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
	}, [authFetch, bindings, script, setUUID, toSave]);

	useEffect(() => {
		if (UUID === null && currentJobId) {
			authFetch(`job/${currentJobId}/bindings`)
				.then((r) => r.json())
				.then((r) => {
					setRes(r);
				})
				.then(() => {
					setLoadingPost(false);
					setCurrentJobId('');
				})
				.catch(() => {
					setLoadingPost(false);
					setCurrentJobId('');
					setBindingLoadingErrors(true);
				});
		}
	}, [UUID, authFetch, currentJobId]);

	return (
		<div className="container">
			<Header script={script} errors={errors} getRes={getRes} />
			<Configuration
				script={script}
				setScript={setScript}
				bindings={bindings}
				setBindings={setBindings}
				toSave={toSave}
				setToSave={setToSave}
				setRes={setRes}
				hasScriptErrors={errors.length > 0}
			/>
			<SparkComponent
				script={script}
				setScript={onChangeScript}
				setErrors={setErrors}
				bindings={bindings}
				setBindings={onChangeBindings}
				bindingLoadingErrors={bindingLoadingErrors}
				res={res}
				loadingPost={loadingPost}
				apiError={apiError}
				toSave={toSave}
				setToSave={setToSave}
				persistentDatasets={persistentDatasets}
			/>
		</div>
	);
};

export default Spark;
