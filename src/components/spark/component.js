import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';
import { UUID_State, SPARK_SCRIPT, SPARK_BINDINGS, SPARK_TO_SAVE } from 'store';
import Header from './header';
import Configuration from '../configuration';
import SparkComponent from './main';
import { useAuthenticatedFetch } from 'utils/hooks';
import * as C from 'utils/constants';
import { getSparkType } from 'utils/spark-type';

const Spark = () => {
	const { pathname } = useLocation();
	const [script, setScript] = useRecoilState(SPARK_SCRIPT);
	const [errors, setErrors] = useState([]);
	const [loadingPost, setLoadingPost] = useState(false);
	const [bindings, setBindings] = useRecoilState(SPARK_BINDINGS);
	const [toSave, setToSave] = useRecoilState(SPARK_TO_SAVE);
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
			`execute?mode=${C.SPARK}&type=${getSparkType(pathname)}`,
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
	}, [authFetch, bindings, script, setUUID, pathname, toSave]);

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
				script={script}
				errors={errors}
				bindings={bindings}
				pathname={pathname}
				getRes={getRes}
			/>
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
				// variableURLs={urls}
				bindings={bindings}
				setBindings={onChangeBindings}
				res={res}
				loadingPost={loadingPost}
				apiError={apiError}
				toSave={toSave}
				setToSave={setToSave}
			/>
		</div>
	);
};

export default Spark;
