import React from 'react';
import PropTypes from 'prop-types';

const VmwInputAnswer = ({ placeholder, unit, warning, name, onChange }) => {
  return (
    <div className="vmw-input-answer">
      <div className="vmw-input-group">
        <input
          id="input-styled"
          type="input"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
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
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default VmwInputAnswer;
