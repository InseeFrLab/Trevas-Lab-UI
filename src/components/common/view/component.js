import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import Data from './data';
import Metadata from './metadata';

const View = ({ vtlJson }) => {
	const [activeKey, setActiveKey] = useState('0');
	const { dataStructure, dataPoints } = vtlJson;
	const orderedStructure = dataStructure
		.map((s, i) => ({ ...s, index: i }))
		.sort((a, b) => (a.name > b.name ? 1 : -1));
	const orderedPoints = dataPoints.map((line) =>
		line.reduce((acc, _, i, l) => [...acc, l[orderedStructure[i].index]], [])
	);
	const orderedVtlJson = {
		dataStructure: orderedStructure,
		dataPoints: orderedPoints,
	};
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
						Data
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="0">
					<Card.Body>
						<Data vtlJson={orderedVtlJson} />
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
						Metadata
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="1">
					<Card.Body>
						<Metadata structure={orderedStructure} />
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default View;
