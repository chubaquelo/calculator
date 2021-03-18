import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { result } = props;
  return (
    <div>
      <h2>{result}</h2>
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};