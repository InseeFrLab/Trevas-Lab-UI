import React from 'react';
import PropTypes from 'prop-types';
import { JsonEditor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import './jsoneditor.scss';

const Editor = ({ json, onChange, readOnly, mode }) => (
	<div className="json-editor-container">
		<JsonEditor
			value={json}
			onChange={onChange}
			mode={mode || 'code'}
			allowedModes={['code', 'tree']}
			onEditable={() => !readOnly}
		/>
	</div>
);

Editor.defaultProps = {
	json: {},
	onChange: () => {},
	readOnly: false,
};

Editor.propTypes = {
	json: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	onChange: PropTypes.func,
	readOnly: PropTypes.bool,
};

export default Editor;
