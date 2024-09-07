import React from 'react';
import PropTypes from 'prop-types';

const VmwInputAnswer = ({ placeholder, unit }) => {
  return (
    <div className="vmw-input-answer">
      <input id="input-styled" type="input" placeholder={placeholder} />
      <span>{unit}</span>
    </div>
  );
};

VmwInputAnswer.propTypes = {
  placeholder: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default VmwInputAnswer;
