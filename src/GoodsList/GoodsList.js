import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletedItem, getEditItem, selectedItem } from '../Store/actions';

import GoodsListElement from '../GoodsListElement/GoodsListElement';

const GoodsList = () => {
	const dispatch = useDispatch();
	const goods = useSelector(state => state.goods.list)

	const onDeleteList = useCallback((id) => {
		dispatch(deletedItem(id));
	}, [dispatch])


	const onSelectedItem = useCallback((id) => {
		dispatch(selectedItem(id));
	}, [dispatch])

	const onEdit = useCallback((id) => {
		dispatch(getEditItem(id));
	}, [dispatch])

	return (
		<div>
			{Array.isArray(goods) &&
			goods.map((good) => (
				<GoodsListElement
					good={good}
					key={good.id}
					onDelete={onDeleteList}
					onSelected={onSelectedItem}
					insertIntoForm={onEdit}
				/>
			))}
		</div>
	);
};


export default GoodsList;
