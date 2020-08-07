import React, { Component } from "react";
import GoodsListElement from "../GoodsListElement/GoodsListElement";
import PropTypes from "prop-types";

export default class GoodsList extends Component {
  onDelete = (id) => {
    this.props.onDelete(id);
  };
  onSelected = (id) => {
    this.props.onSelected(id);
  };
  onEdit = (id) => {
    this.props.onEdit(id);
  };

  render() {
    const { goods } = this.props;
    return (
      <div>
        {Array.isArray(goods) &&
          goods.map((good) => {
            return (
              <GoodsListElement
                good={good}
                key={good.id}
                onDelete={this.onDelete}
                onSelected={this.onSelected}
                onEdit={this.onEdit}
              />
            );
          })}
      </div>
    );
  }
}

GoodsList.defaultProps = {
  goods: [],
};

GoodsList.propTypes = {
  goods: PropTypes.array,
};
