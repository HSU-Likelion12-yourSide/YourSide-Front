import React from 'react';
import PropTypes from 'prop-types';

const VmwCheckboxAnswer = ({ placeholder, warning }) => {
  return (
    <div className="vmw-checkbox-answer">
      <div className="vmw-input-group">
        <span>적용안함</span>
        <input id="input-styled" type="checkbox" placeholder={placeholder} />
        <span>4대보험(9.32%)</span>
        <input id="input-styled" type="checkbox" placeholder={placeholder} />
        <span>소득세(3.3%)</span>
        <input id="input-styled" type="checkbox" placeholder={placeholder} />
      </div>
      <span id="input-warning-message">{warning}</span>
    </div>
  );
};

VmwCheckboxAnswer.propTypes = {
  placeholder: PropTypes.string.isRequired,
  warning: PropTypes.string.isRequired,
};

export default VmwCheckboxAnswer;
