import React, { useEffect } from 'react';

const EditableCell = ({
	value: initialValue,
	row: { index },
	column: { id },
	handleChange,
}) => {
	const [value, setValue] = React.useState(initialValue);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const onBlur = () => {
		handleChange(index, id, value);
	};

	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	return <input value={value} onChange={onChange} onBlur={onBlur} />;
};

export default EditableCell;
