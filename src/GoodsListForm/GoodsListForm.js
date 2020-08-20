import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addEditItem, addItem, clearEditItem, newState, updateStateForm } from '../Store/actions';

import './GoodsListForm.css';

const GoodsListForm = () => {

	const dispatch = useDispatch();

	const formData = useSelector(state => state.form);
	const goodItem = useSelector(state => state.goods.editField);
	const {title, description, weight} = formData;


	React.useEffect(() => {
		if (!goodItem.id) return;
		dispatch(newState(goodItem));
	}, [dispatch, goodItem]);


	const onInputChange = useCallback(({target}) => {
		const value = target.value.replace(',', '.')
		dispatch(updateStateForm({
			[target.name]: value
		}))
	}, [dispatch]);

	const onFormSubmit = useCallback((e) => {
		e.preventDefault();

		if (goodItem.id) {
			dispatch(addEditItem(formData))
			dispatch(clearEditItem())
		} else {
			if (description && title && weight) {
				dispatch(addItem(formData))
			} else return;
		}
	}, [dispatch, formData, goodItem, description, title, weight]);

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

export default GoodsListForm;
