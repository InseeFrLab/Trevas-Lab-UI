import React, { useState } from 'react';
import { Button } from '@inseefr/wilco';
import FileUploader from 'components/common/file-uploader';

const Bindings = ({ setBindings }) => {
	const [data, setData] = useState(null);

	const onClick = () => {
		setBindings((b) => ({ ...b, crabe: data }));
	};

	return (
		<>
			<FileUploader text="JSON (shape to define)" setter={setData} />
			<Button label="Execute" action={onClick} />
		</>
	);
};

export default Bindings;
