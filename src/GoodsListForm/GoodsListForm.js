import React from "react";
import PropTypes from "prop-types";

import "./GoodsListForm.css";

const GoodsListForm = ({editField, editElement, onAdd}) => {
	const [stateForm, setStateForm] = React.useState({
		id: "",
		title: "",
		weight: "",
		description: "",
		edit: false,
		selected: false,
	});
	const {title, weight, description} = stateForm;

	React.useEffect(() => {
		if (!editField.id) return;
		setStateForm({...editField});
	}, [editField]);

	const onInputChange = ({target}) => {
		setStateForm({
			...stateForm,
			[target.name]: target.value
		});
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		if (editField.edit) {
			editElement({...stateForm});
		} else {
			if (description && title && weight) {
				onAdd(stateForm);
			} else return;
		}

		setStateForm({
			id: "",
			title: "",
			weight: "",
			description: "",
			edit: false,
			selected: false,
		});
	};

	return (
		<div>
			<form className="GoodsListForm" onSubmit={onFormSubmit}>
				<input
					className="GoodsListFormInput"
					placeholder="Title"
					name="title"
					value={title}
					onChange={onInputChange}
				/>
				<input
					className="GoodsListFormInput"
					placeholder="Weight"
					name="weight"
					value={weight}
					onChange={onInputChange}
				/>
				<input
					className="GoodsListFormInput"
					placeholder="Description"
					name="description"
					value={description}
					onChange={onInputChange}
				/>
				<button className="GoodsListFormButton">Add</button>
			</form>
		</div>
	);
};

GoodsListForm.defaultProps = {
	editField: {},
};

GoodsListForm.propTypes = {
	onAdd: PropTypes.func,
	editField: PropTypes.object,
	editElement: PropTypes.func,
};

export default GoodsListForm;
