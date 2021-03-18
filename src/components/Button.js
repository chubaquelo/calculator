import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name } = props;
  return (
    <div>
      <button type="button">{name}</button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};
