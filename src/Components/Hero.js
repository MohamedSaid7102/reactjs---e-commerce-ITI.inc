import React, { Component } from 'react';
import faker from 'faker';

export default class Hero extends Component {
  render() {
    return (
      <div className="container-wrap">
        <h1 className="main-hero__heading">{faker.company.companyName()}</h1>
        <div className="hero-container container-wrap">
          <div className="hero__info">
            <h2 className="hero__heading">{faker.commerce.department()}</h2>
            <p className="hero__description">
              {faker.commerce.productDescription()}
              {faker.commerce.productDescription()}
              {faker.commerce.productDescription()}
            </p>
            <div className="hero__btns-container">
              <button type="button" class="btn btn-info btn--lg-2x hero__btn">
                Info
              </button>
              <button
                type="button"
                class="btn btn-outline-success btn--lg-2x hero__btn"
              >
                Fork it
              </button>
            </div>
          </div>
          <picture className="hero__img">
            <img
              src="https://images.unsplash.com/photo-1558191053-8edcb01e1da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80"
              alt="shopping banner"
              className="hero__img-img"
            />
          </picture>
        </div>
        {/* 2 */}
        <div className="hero-container container-wrap">
          <picture className="hero__img">
            <img
              src="https://images.unsplash.com/photo-1555529669-83329d5fac8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80"
              alt="shopping banner"
              className="hero__img-img"
            />
          </picture>
          <div className="hero__info">
            <h2 className="hero__heading">{faker.commerce.department()}</h2>
            <p className="hero__description">
              {faker.commerce.productDescription()}
              {faker.commerce.productDescription()}
              {faker.commerce.productDescription()}
            </p>
            <div className="hero__btns-container">
              <button type="button" class="btn btn-info btn--lg-2x hero__btn">
                Info
              </button>
              <button
                type="button"
                class="btn btn-outline-success btn--lg-2x hero__btn"
              >
                Fork it
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
