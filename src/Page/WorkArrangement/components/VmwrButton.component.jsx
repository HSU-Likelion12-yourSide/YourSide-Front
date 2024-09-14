import React from 'react';
import PropTypes from 'prop-types';

const VmwrOptionButton = ({ resultState, option }) => {
  return (
    <div>
      <div className={resultState}>{option}</div>
    </div>
  );
};

VmwrOptionButton.propTypes = {
  resultState: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
};

export default VmwrOptionButton;
