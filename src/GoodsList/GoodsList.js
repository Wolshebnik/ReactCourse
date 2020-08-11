import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

import GoodsListElement from '../GoodsListElement/GoodsListElement';

const GoodsList = ({
  goods, onDelete, onSelected, onEdit,
}) => {
  const onDeleteList = useCallback((id) => {
    onDelete(id);
  },[onDelete]);

  const onSelectedList = useCallback((id) => {
    onSelected(id);
  },[onSelected]);

  const insertIntoForm = useCallback((id) => {
    onEdit(id);
  },[onEdit]);

  return (
    <div>
      {Array.isArray(goods)
        && goods.map((good) => (
          <GoodsListElement
            good={good}
            key={good.id}
            onDelete={onDeleteList}
            onSelected={onSelectedList}
            insertIntoForm={insertIntoForm}
          />
        ))}
    </div>
  );
};
GoodsList.defaultProps = {
  goods: [],
};

GoodsList.propTypes = {
  goods: PropTypes.array,
  onDelete:PropTypes.func,
  onSelected:PropTypes.func,
  onEdit:PropTypes.func,
};

export default GoodsList;
