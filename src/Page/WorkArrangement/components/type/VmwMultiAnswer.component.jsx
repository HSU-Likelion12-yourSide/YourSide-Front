import React from 'react';
import PropTypes from 'prop-types';

const VmwCheckboxAnswer = ({ placeholder, warning, name, onChange }) => {
  return (
    <div className="vmw-checkbox-answer">
      <div className="vmw-input-group">
        <span>적용안함</span>
        <input
          id="input-styled"
          type="radio"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value="none"
        />
        <span>4대보험(9.32%)</span>
        <input
          id="input-styled"
          type="radio"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value="majorInsurance"
        />
        <span>소득세(3.3%)</span>
        <input
          id="input-styled"
          type="radio"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value="incomeTax"
        />
      </div>
      <span id="input-warning-message">{warning}</span>
    </div>
  );
};

VmwCheckboxAnswer.propTypes = {
  placeholder: PropTypes.string.isRequired,
  warning: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default VmwCheckboxAnswer;
