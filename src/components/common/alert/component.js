import React from 'react';
import { Alert } from 'react-bootstrap';

const CustomAlert = ({ label, variant }) => {
	return <Alert variant={variant}>{label}</Alert>;
};
export default CustomAlert;
