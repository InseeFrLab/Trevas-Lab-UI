import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';
import { UUID_State, SPARK_SCRIPT, SPARK_BINDINGS } from 'store';
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
					const { bindings } = acc;
					return { ...acc, s3ForBindings: { ...bindings, [k]: rest } };
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
			{ bindings: {}, s3ForBindings: {} }
		);

		authFetch(
			`execute?mode=${C.SPARK}&type=${getSparkType(pathname)}`,
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
	}, [authFetch, bindings, script, setUUID, pathname]);

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
				hasScriptErrors={errors.length > 0}
				spark
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
			/>
		</div>
	);
};

export default Spark;
