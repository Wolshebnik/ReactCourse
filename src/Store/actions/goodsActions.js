export const addItem = (item) => {
	return {
		type: 'ADD_ITEM',
		payload: item
	};
};

export const selectedItem = (itemId) => {
	return {
		type: 'SELECTED_ITEM',
		payload: itemId
	};
};

export const deletedItem = (itemId) => {
	return {
		type: 'DELETE_ITEM',
		payload: itemId
	};
};
export const deletedSelectedItem = () => {
	return {
		type: 'DELETE_SELECTED'
	};
};
export const getEditItem = (id) => {
	return {
		type: 'EDITABLE_ELEMENT',
		payload: id
	};
};
export const addEditItem = (item) => {
	return {
		type: 'ADD_EDIT_ELEMENT',
		payload: item
	};
};
export const clearEditItem = () => {
	return {
		type: 'CLEAR_ITEM',
	};
};
