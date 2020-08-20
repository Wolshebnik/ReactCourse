const initialState = {
	title: '',
	weight: '',
	description: '',
	selected: false,
};

const reducer = (state = initialState, {type, payload}) => {

	switch (type) {
		case 'UPDATE_FORM':
			return {
				...state,
				...payload
			};
		case 'CLEAR_FORM':
		case 'ADD_ITEM':
		case 'ADD_EDIT_ELEMENT':
			return {
				...initialState
			};

		case 'NEW_STATE':
			return {
				...state,
				...payload
			};

		default:
			return state;
	}
};

export default reducer;




