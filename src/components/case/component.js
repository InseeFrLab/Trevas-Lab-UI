import React, { useState, useEffect, useCallback } from 'react';
import { Loading } from '@inseefr/wilco';
import { Position } from 'monaco-editor';
import Header from './header';
import Editor from '../editor/VtlEditor';
import Input from './input';
import Output from './output';
import { putVTL } from 'api';
import { useAuthenticatedFetch } from 'utils/hooks';
import { IN_MEMORY, SPARK_LOCAL } from 'utils/constants';

const Case = ({ config, context }) => {
	const {
		label,
		inMemoryData,
		sparkLocalData,
		sparkClusterData,
		script,
		defaultBindings,
	} = config;

	const [vtl, setVtl] = useState(null);
	const [errors, setErrors] = useState([]);
	const [loading, setLoading] = useState(true);
	const [bindings, setBindings] = useState(defaultBindings);
	const [res, setRes] = useState(null);
	const [apiError, setApiError] = useState('');
	const setCursorPosition = useState(new Position(0, 0))[1];
	const [tempCursor] = useState(new Position(0, 0));

	const onChange = (e) => {
		setVtl(e);
		setRes(null);
		setApiError('');
	};

	const authFetch = useAuthenticatedFetch();

	const getRes = useCallback(() => {
		setRes(null);
		setLoading(true);
		authFetch(context, { vtlScript: vtl, bindings }, 'POST')
			.then((res) => res.json())
			.then((r) => {
				if (r.error) setApiError(r.error.chars);
				else setRes(r);
			})
			.then(() => {
				setLoading(false);
			});
	}, [authFetch]);

	useEffect(() => {
		if (context === IN_MEMORY) {
			Promise.all(
				inMemoryData.map(({ url }) => fetch(url).then((d) => d.json()))
			)
				.then((arr) => {
					const loadedBindings = arr.reduce(
						(acc, d, i) => ({ ...acc, [inMemoryData[i].name]: d }),
						defaultBindings
					);
					setBindings(loadedBindings);
				})
				.then(() => {
					setLoading(false);
				});
		} else if (context === SPARK_LOCAL) {
			setBindings({ ...sparkLocalData, ...defaultBindings });
			setLoading(false);
		} else {
			setBindings({ ...sparkClusterData, ...defaultBindings });
			setLoading(false);
		}
	}, [inMemoryData, sparkLocalData, sparkClusterData, defaultBindings]);

	useEffect(() => {
		script
			? fetch(script)
					.then((s) => s.text())
					.then((s) => {
						setVtl(s);
					})
					.catch(() => {
						setVtl('');
					})
			: setVtl('');
	}, [script]);

	if (loading) return <Loading text="Ongoing treatments..." />;

	return (
		<div className="container">
			<Header label={label} errors={errors} getRes={getRes} />
			<div className="row">
				<div className="col-md-12">
					<h2>VTL script</h2>
					{vtl !== null && (
						<Editor
							resizeLayout={[false, true, 100]}
							code={vtl}
							setCode={onChange}
							setCodeChanged={() => false}
							theme="vs-dark"
							languageVersion="vtl-2.0-insee"
							setCursorPosition={setCursorPosition}
							tempCursor={tempCursor}
							setErrors={setErrors}
							// TODO: enable several dataset suggestions
							suggesterURL={inMemoryData[0]?.url || ''}
						/>
					)}
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<Input
						bindings={bindings}
						setBindings={setBindings}
						setRes={setRes}
						context={context}
					/>
				</div>
				<div className="col-md-6">
					<Output res={res} context={context} apiError={apiError} />
				</div>
			</div>
		</div>
	);
};

export default Case;
