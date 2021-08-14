import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class ProductsContainer extends Component {
  state = {
    selectedSection: '',
  };
  render() {
    const { data, onAddProduct, handleAddProduct } = this.props;
    const currentSection = this.state.selectedSection;
    return (
      <div className="container-wrap">
        <div className="products-container">
          <h1 className="product__heading">Our Products</h1>
          <nav className="buttons-container">
            <button
              type="button"
              class={`btn ${
                this.state.selectedSection === 'All'
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              } btn--lg`}
              onClick={() => this.setState({ selectedSection: 'All' })}
            >
              All
            </button>
            <button
              type="button"
              class={`btn ${
                this.state.selectedSection === 'Makup'
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              } btn--lg`}
              onClick={() => this.setState({ selectedSection: 'Makup' })}
            >
              Makup
            </button>
            <button
              type="button"
              class={`btn ${
                this.state.selectedSection === 'Laptops'
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              } btn--lg`}
              onClick={() => this.setState({ selectedSection: 'Laptops' })}
            >
              Laptops
            </button>
            <button
              type="button"
              class={`btn ${
                this.state.selectedSection === 'Phones'
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              } btn--lg`}
              onClick={() => this.setState({ selectedSection: 'Phones' })}
            >
              Phones
            </button>
          </nav>
          <div className="cards-container">
            {currentSection === 'All' || currentSection === ''
              ? data.map((card) => {
                  return (
                    <ProductCard
                      key={card.id}
                      id={card.id}
                      imgUrl={card.imgUrl}
                      header={card.header}
                      description={card.description}
                      onAddProduct={onAddProduct}
                    />
                  );
                })
              : data.map((card) => {
                  if (card.type === currentSection)
                    return (
                      <ProductCard
                        key={card.id}
                        id={card.id}
                        imgUrl={card.imgUrl}
                        header={card.header}
                        description={card.description}
                        onAddProduct={onAddProduct}
                      />
                    );
                  return '';
                })}
          </div>
        </div>
      </div>
    );
  }
}
