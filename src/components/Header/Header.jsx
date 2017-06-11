import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = (props) => (
  <header className="main-header">
    <h1 className="main-header__title">Книжная полка</h1>
    <button className="main-btn" onClick={props.toggleModal} ></button>
  </header>
);

Header.propTypes = {
  toggleModal: PropTypes.func.isRequired,
}

export default Header;