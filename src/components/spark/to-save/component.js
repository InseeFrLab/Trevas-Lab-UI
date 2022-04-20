import React, { useState } from 'react';
import { Button } from '@inseefr/wilco';
import { AddIcon } from 'components/common/icons';
import ResultsToSaveList from './list';
import { Select } from '@inseefr/wilco';
import SlidingPanel from 'components/common/sliding-panel';
import Connector from 'components/bindings/connector';
import { S3 } from 'utils/constants';

const CONNECTOR_OPTIONS = [
	// { value: JDBC, label: 'JDBC' },
	{ value: S3, label: 'S3' },
];

const ResultsToSave = ({ toSave, setToSave }) => {
	const [newResult, setNewResult] = useState(null);
	const [view, setView] = useState('');
	const [targetType, setTargetType] = useState(null);
	const onClick = () => {
		setNewResult(true);
	};
	const handleView = (n) => {
		setView(n);
		setTargetType(toSave[n].type);
	};
	return (
		<>
			<div className="row justify-content-center">
				<Button label={<AddIcon />} action={onClick} />
			</div>
			<div className="row">
				<ResultsToSaveList toSave={toSave} view={view} setView={handleView} />
			</div>
			<SlidingPanel
				title={newResult ? 'Define binding to save' : view}
				open={view || newResult ? true : false}
				setOpen={() => {
					setView('');
					setNewResult(false);
					setTargetType(null);
				}}
				width={'70%'}
			>
				<div className="row">
					<div className="col-md-6">
						<Select
							label="Target"
							value={CONNECTOR_OPTIONS.find(
								({ value }) => value === targetType
							)}
							onChange={(e) => {
								setTargetType(e);
							}}
							options={CONNECTOR_OPTIONS}
							col={12}
						/>
					</div>
				</div>
				{targetType && (
					<Connector
						type={targetType}
						bindings={toSave}
						setBindings={setToSave}
						closePanel={() => {
							setView('');
							setNewResult(false);
						}}
						init={{
							...toSave[view],
							name: view,
						}}
						deletable={!newResult}
						disableView
					/>
				)}
			</SlidingPanel>
		</>
	);
};

export default ResultsToSave;
