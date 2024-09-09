import React from 'react';
import PropTypes from 'prop-types';

const VmwInputAnswer = ({ placeholder, unit, warning }) => {
  return (
    <div className="vmw-input-answer">
      <div className="vmw-input-group">
        <input id="input-styled" type="input" placeholder={placeholder} />
        <span>{unit}</span>
      </div>
      <span id="input-warning-message">{warning}</span>
    </div>
  );
};

VmwInputAnswer.propTypes = {
  placeholder: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  warning: PropTypes.string.isRequired,
};

export default VmwInputAnswer;
