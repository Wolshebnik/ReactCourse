export const updateStateForm = (newInput) => {
	return {
		type: 'UPDATE_FORM',
		payload: newInput
	}
};

export const clearForm = () => {
	return {
		type: 'CLEAR_FORM',
	}
};
export const newState = (stateForm) => {
	console.log(stateForm)
	return {
		type: 'NEW_STATE',
		payload: stateForm
	}
};


