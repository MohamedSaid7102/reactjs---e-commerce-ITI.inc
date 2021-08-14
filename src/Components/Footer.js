import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a class="navbar-brand" href="#">
          <img
            src="https://image.flaticon.com/icons/png/512/3081/3081648.png"
            alt="Logo"
            className="nav__img"
          />
          Shopfy
        </a>
        <small>Copyright &copy; 2021 - Mohamed Hossain</small>
      </footer>
    );
  }
}
