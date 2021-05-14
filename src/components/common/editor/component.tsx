import React from 'react';
import { AntlrEditor } from 'antlr-editor';
import * as tools from 'vtl-2-0-antlr-tools-ts';
import { getSuggestions } from './vtl-suggestions';

const Editor = ({ script, setScript, setErrors, variableURLs }) => {
	const customTools = { ...tools, getSuggestionsFromRange: getSuggestions };
	return (
		<AntlrEditor
			script={script}
			setScript={setScript}
			languageVersion="vtl-2.0-insee"
			setErrors={setErrors}
			variableURLs={variableURLs}
			tools={customTools}
		/>
	);
};

export default Editor;
