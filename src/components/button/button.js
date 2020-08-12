import React from 'react';
import './button.scss';

const Button = ({ children, active, onClickHandler }) => {
  return (
    <button
      type="button"
      className={`btn ${active && 'btn-done'}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
