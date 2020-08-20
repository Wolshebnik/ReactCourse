import {
	addNewItem,
	deleteSelected,
	editableElement,
	editHandler,
	getTotal,
	getTotalSelected,
	onSelect,
	removeElementById
} from '../../Utils/goodsUtils';
import { goods } from '../../Mocks/GoodsMock';

const initialState = {
	list: goods,
	total: getTotal(goods),
	totalSelected: null,
	editField: {}
};

const reducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case 'ADD_ITEM': {
			const newGoods = addNewItem(payload, state.list)
			return {
				...state,
				list: newGoods,
				total: getTotal(newGoods),
				totalSelected: getTotalSelected(newGoods)
			};
		}
		case 'SELECTED_ITEM': {
			const newGoods = onSelect(payload, state.list)
			return {
				...state,
				list: newGoods,
				total: getTotal(newGoods),
				totalSelected: getTotalSelected(newGoods)

			};
		}
		case 'DELETE_ITEM': {
			const newGoods = removeElementById(payload, state.list)
			return {
				...state,
				list: newGoods,
				total: getTotal(newGoods),
				totalSelected: getTotalSelected(newGoods)
			};
		}

		case 'DELETE_SELECTED': {
			const newGoods = deleteSelected(state.list)
			return {
				...state,
				list: newGoods,
				total: getTotal(newGoods)
			};
		}

		case 'EDITABLE_ELEMENT': {
			const newGoods = editHandler(payload, state.list)
			return {
				...state,
				editField: newGoods
			};
		}

		case 'ADD_EDIT_ELEMENT': {
			const newGoods = editableElement(payload, state.list)
			return {
				...state,
				list: newGoods,
				total: getTotal(newGoods),
				totalSelected: getTotalSelected(newGoods)
			};
		}

		case 'CLEAR_ITEM':
			return {
				...state,
				editField: {}
			}

		default:
			return state;
	}
};

export default reducer;
