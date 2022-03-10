import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import Bindings from './bindings';
import Editor from 'components/common/editor';

const WipComponent = ({
	script,
	setScript,
	setErrors,
	variableURLs,
	bindings,
	setBindings,
}) => {
	return (
		<Accordion defaultActiveKey="0">
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Button} variant="link" eventKey="0">
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
					<Accordion.Toggle as={Button} variant="link" eventKey="1">
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
					<Accordion.Toggle as={Button} variant="link" eventKey="2">
						Results
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="2">
					<Card.Body>Results</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default WipComponent;
