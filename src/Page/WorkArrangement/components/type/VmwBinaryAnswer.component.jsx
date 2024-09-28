import React from 'react';
import PropTypes from 'prop-types';

const VmwBinaryAnswer = ({ placeholder, warning }) => {
  return (
    <div className="vmw-yesOrNo-answer">
      <div className="vmw-input-group">
        <span>예</span>
        <input id="input-styled" type="checkbox" placeholder={placeholder} />
        <span>아니오</span>
        <input id="input-styled" type="checkbox" placeholder={placeholder} />
      </div>
      <span id="input-warning-message">{warning}</span>
    </div>
  );
};

VmwBinaryAnswer.propTypes = {
  placeholder: PropTypes.string.isRequired,
  warning: PropTypes.string.isRequired,
};

export default VmwBinaryAnswer;
