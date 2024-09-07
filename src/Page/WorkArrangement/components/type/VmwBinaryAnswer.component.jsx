import React from 'react';
import PropTypes from 'prop-types';

const VmwYesOrNoAnswer = ({ placeholder }) => {
  return (
    <div className="vmw-yesOrNo-answer">
      <span>예</span>
      <input id="input-styled" type="checkbox" placeholder={placeholder} />
      <span>아니오</span>
      <input id="input-styled" type="checkbox" placeholder={placeholder} />
    </div>
  );
};

VmwYesOrNoAnswer.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default VmwYesOrNoAnswer;
