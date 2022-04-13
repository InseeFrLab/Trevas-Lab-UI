import React, { useState, useEffect } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import Bindings from './bindings';
import Editor from 'components/common/editor';
import Results from './results';

const InMemory = ({
	script,
	setScript,
	setErrors,
	variableURLs,
	bindings,
	setBindings,
	res,
	loadingPost,
	apiError,
}) => {
	const [activeKey, setActiveKey] = useState('0');

	useEffect(() => {
		if (loadingPost || res) {
			setActiveKey('2');
		}
	}, [loadingPost, res]);

	return (
		<Accordion defaultActiveKey="0" activeKey={activeKey}>
			<Card>
				<Card.Header>
					<Accordion.Toggle
						as={Button}
						variant="link"
						eventKey="0"
						onClick={() => {
							activeKey === '0' ? setActiveKey(null) : setActiveKey('0');
						}}
					>
						Bindings
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="0">
					<Card.Body>
						<Bindings bindings={bindings} setBindings={setBindings} />
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle
						as={Button}
						variant="link"
						eventKey="1"
						onClick={() => {
							activeKey === '1' ? setActiveKey(null) : setActiveKey('1');
						}}
					>
						VTL Script
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="1">
					<Card.Body>
						<Editor
							script={script}
							setScript={setScript}
							setErrors={setErrors}
							variableURLs={variableURLs}
						/>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle
						as={Button}
						variant="link"
						eventKey="2"
						onClick={() => {
							activeKey === '2' ? setActiveKey(null) : setActiveKey('2');
						}}
					>
						Preview results
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="2">
					<Card.Body>
						<Results
							loadingPost={loadingPost}
							results={res}
							apiError={apiError}
						/>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default InMemory;
