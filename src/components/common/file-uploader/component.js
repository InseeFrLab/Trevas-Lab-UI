import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './file-uploader.scss';

const FileUploader = ({ file, setData, setFile }) => {
	const onDrop = useCallback(
		(acceptedFiles) => {
			acceptedFiles.forEach((file) => {
				const reader = new FileReader();
				reader.onabort = () => console.log('file reading was aborted');
				reader.onerror = () => console.log('file reading has failed');
				reader.onload = (f) => {
					setFile(file);
					const d = JSON.parse(f.target.result);
					setData(d);
				};
				reader.readAsText(file);
			});
		},
		[setData]
	);
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		onDrop,
	});

	const initFile = file && (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	);

	const files = acceptedFiles.map((f) => (
		<li key={f.path}>
			{f.path} - {f.size} bytes
		</li>
	));

	const status =
		(Array.isArray(acceptedFiles) && acceptedFiles.length > 0) || file
			? 'filled'
			: 'empty';

	return (
		<section className="container">
			<div
				{...getRootProps({ className: 'dropzone' })}
				className={`uploader-zone ${status}`}
			>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here, or click to select files</p>
			</div>
			{!(Array.isArray(acceptedFiles) && acceptedFiles.length > 0) && file && (
				<aside>
					<p>Active file: {initFile}</p>
				</aside>
			)}
			{Array.isArray(acceptedFiles) && acceptedFiles.length > 0 && (
				<aside>
					<p>Active file: {files}</p>
				</aside>
			)}
		</section>
	);
};

export default FileUploader;
