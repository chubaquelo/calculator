import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name, clickHandler } = props;
  return (
    <button className="w-full h-full" onClick={clickHandler} type="button">{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
