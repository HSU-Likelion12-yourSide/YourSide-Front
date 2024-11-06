import React from 'react';
import PropTypes from 'prop-types';

/**
 * A binary (yes or no) answer component.
 * @param {Object} props - The props object.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {string} props.warning - The warning message to display.
 */

const VmwBinaryAnswer = ({ warning, name, onChange }) => {
  return (
    <div className="vmw-yesOrNo-answer">
      <div className="vmw-input-group">
        <span>예</span>
        <input
          id="input-styled"
          type="radio"
          name={name}
          onChange={onChange}
          value="yes"
        />
        <span>아니오</span>
        <input
          id="input-styled"
          type="radio"
          name={name}
          onChange={onChange}
          value="no"
        />
      </div>
      <span id="input-warning-message">{warning}</span>
    </div>
  );
};

VmwBinaryAnswer.propTypes = {
  warning: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default VmwBinaryAnswer;
