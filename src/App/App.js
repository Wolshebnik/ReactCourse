import React, { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import GoodsList from '../GoodsList/GoodsList';
import GoodsListForm from '../GoodsListForm/GoodsListForm';

import {deletedSelectedItem} from '../Store/actions'

import './App.css';

const App = () => {
	const dispatch = useDispatch();
	const {total,totalSelected,} = useSelector((state) => state.goods,shallowEqual);

	const onDeleteSelected = useCallback(() => {
	dispatch(deletedSelectedItem());
	}, [dispatch]);

	return (
		<div className="Container">
			<div className="Title">Fridge</div>
			<GoodsList/>
			<div className="Total">
				<div>Total:</div>
				<div>{total}</div>
				<div>{totalSelected || null}</div>
				<button onClick={onDeleteSelected}>DeleteSelected</button>
				<div/>
			</div>
			<GoodsListForm/>
		</div>
	);
};

export default App;
