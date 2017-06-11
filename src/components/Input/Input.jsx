import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = (props) => (
  <div className="add-book__input-wrapper input-wrapper">
    <label htmlFor={props.id} className="input-wrapper__label label">{props.title}</label>
    <input type={props.type} className="input-text" id={props.id} onChange={props.onChange} value={props.value} required={props.required} max={(props.type === 'number') ? '2017' : null} placeholder={props.placeholder} />
  </div>
);

Input.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
}

export default Input;


