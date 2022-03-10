import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './file-uploader.scss';

const FileUploader = ({ setter }) => {
	const onDrop = useCallback(
		(acceptedFiles) => {
			acceptedFiles.forEach((file) => {
				const reader = new FileReader();
				reader.onabort = () => console.log('file reading was aborted');
				reader.onerror = () => console.log('file reading has failed');
				reader.onload = (f) => {
					const d = JSON.parse(f.target.result);

					setter(d);
				};
				reader.readAsText(file);
			});
		},
		[setter]
	);
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		onDrop,
	});

	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	return (
		<section className="container">
			<div
				{...getRootProps({ className: 'dropzone' })}
				className="uploader-zone"
			>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here, or click to select files</p>
			</div>
			{Array.isArray(acceptedFiles) && acceptedFiles.length > 0 && (
				<aside>
					<p>Active file: {files}</p>
				</aside>
			)}
		</section>
	);
};

export default FileUploader;
