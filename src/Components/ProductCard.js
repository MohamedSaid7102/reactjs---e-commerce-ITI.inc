import React, { Component } from 'react';

export default class ProductCard extends Component {
  state = {
    addedToShoppingCard: false,
  };
  render() {
    const { id, imgUrl, header, description, onAddProduct } = this.props;
    return (
      <div className="card">
        <div className="card__img-container">
          <img src={imgUrl} alt="card" className="card__img" />
        </div>
        <h3 className="card__heading">{header}</h3>
        <p className="card__description">{description}</p>
        <button
          className="card__btn"
          onClick={() => {
            if (!this.state.addedToShoppingCard) onAddProduct(id);
            this.setState({ addedToShoppingCard: true });
          }}
        >
          Add Card
        </button>
      </div>
    );
  }
}
