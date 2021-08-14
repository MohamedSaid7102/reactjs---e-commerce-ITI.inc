import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    const {numberOfProducts} = this.props;
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img
            src="https://image.flaticon.com/icons/png/512/3081/3081648.png"
            alt="Logo"
            className="nav__img"
          />Shopfy
        </a>
        <div className="nav__counter">{numberOfProducts}</div>
      </nav>
    );
  }
}
