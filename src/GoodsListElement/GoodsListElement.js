import React, {useCallback} from "react";
import PropTypes from 'prop-types';

import "./GoodsListElement.css";


const GoodsListElement = ({ good, onDelete, onSelected, insertIntoForm }) => {
  const { id, title, weight, description, selected } = good;

  const onDeleteItem = useCallback((e) => {
    e.stopPropagation();
    onDelete(id);
  },[onDelete,id]);

  const onSelectedItem = useCallback(() => {
    onSelected(id);
  },[onSelected,id]);

  const insertIntoFormItem = useCallback((e) => {
    e.stopPropagation();
    insertIntoForm(id);
  },[insertIntoForm,id]);

  return (
    <div
      className={`GoodsListElement ${selected ? "GoodsListElementGrey" : ""}`}
      onClick={onSelectedItem}
    >
      <div className="GoodsListElement_Column">{title}</div>
      <div className="GoodsListElement_Column">{weight}</div>
      <div className="GoodsListElement_Column GoodsListElement_ColumnDescription">
        {description}
      </div>
      <div className="GoodsListElement_Column GoodsListElement_Button">
        <button onClick={insertIntoFormItem}>Edit</button>
        <button onClick={onDeleteItem}>Delete</button>
      </div>
    </div>
  );
};

GoodsListElement.defaultProps = {
  good: {},
};

GoodsListElement.propTypes = {
  good: PropTypes.object,
  onDelete: PropTypes.func,
  onSelected:PropTypes.func,
  insertIntoForm:PropTypes.func,

};
export default GoodsListElement;
