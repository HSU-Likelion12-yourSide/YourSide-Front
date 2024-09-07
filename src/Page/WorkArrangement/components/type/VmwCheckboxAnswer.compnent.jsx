import React from 'react';
import PropTypes from 'prop-types';

const VmwCheckboxAnswer = ({ placeholder }) => {
  return (
    <div className="vmw-checkbox-answer">
      <span>적용안함</span>
      <input id="input-styled" type="checkbox" placeholder={placeholder} />
      <span>4대보험(9.32%)</span>
      <input id="input-styled" type="checkbox" placeholder={placeholder} />
      <span>소득세(3.3%)(9.32%)</span>
      <input id="input-styled" type="checkbox" placeholder={placeholder} />
    </div>
  );
};

VmwCheckboxAnswer.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default VmwCheckboxAnswer;
