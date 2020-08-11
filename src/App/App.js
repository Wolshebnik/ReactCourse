import React, {useCallback} from 'react';
import GoodsList from '../GoodsList/GoodsList';
import { goods as goodsArray } from '../Mocks/GoodsMock';
import GoodsListForm from '../GoodsListForm/GoodsListForm';
import './App.css';
import {
  addNewItem,
  removeElementById,
  getTotal,
  onSelect,
  getTotalSelected,
  editHandler,
  editableElement,
  deleteSelected,
} from '../Utils/goodsUtils';

const App = () => {
  const [goods, setGoods] = React.useState(goodsArray);
  const [total, setTotal] = React.useState(getTotal(goods));
  const [totalSelected, setTotalSelected] = React.useState([]);
  const [editField, setEditField] = React.useState({});

  const onAdd = useCallback((newElement) => {
    const newArray = addNewItem(newElement, goods);
    setGoods(newArray);
    setTotal(getTotal(newArray));
  },[goods]);

  const onEdit = useCallback((id) => {
    setEditField(editHandler(id, goods));
  },[goods]);

  const editElement = useCallback((element) => {
    const newArray = editableElement(element, goods);
    setGoods(newArray);
    setTotal(getTotal(newArray));
    setEditField({});
    setTotalSelected(null);
  },[goods]);

  const onDelete = useCallback((id) => {
    const newArray = removeElementById(id, goods);
    setGoods(newArray);
    setTotal(getTotal(newArray));
    setTotalSelected(getTotalSelected(newArray));
  },[goods]);

  const onSelected = useCallback((id) => {
    const newArray = onSelect(id, goods);
    setGoods(newArray);
    setTotalSelected(getTotalSelected(newArray));
  },[goods]);

  const onDeleteSelected = useCallback(() => {
    const newGoods = deleteSelected(goods);
    setGoods(newGoods);
    setTotal(getTotal(newGoods));
    setTotalSelected(null);
  },[goods]);

  return (
    <div className="Container">
      <div className="Title">Fridge</div>
      <GoodsList
        goods={goods}
        onDelete={onDelete}
        onSelected={onSelected}
        onEdit={onEdit}
      />
      <div className="Total">
        <div>Total:</div>
        <div>{total}</div>
        <div>{totalSelected || null}</div>
        <button onClick={onDeleteSelected}>DeleteSelected</button>
        <div />
      </div>
      <GoodsListForm
        onAdd={onAdd}
        editField={editField}
        editElement={editElement}
      />
    </div>
  );
};

export default App;
