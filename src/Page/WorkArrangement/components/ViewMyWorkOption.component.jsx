import React from 'react';
import PropTypes from 'prop-types';

const ViewMyWorkOption = ({
  option,
  display = 'none',
  description,
  type = 'input',
  placeholder = '시간을 입력해주세요.',
  unit = '시간',
}) => {
  return (
    <div className="vmw-group">
      <div className="vmw-question">
        <span>{option}</span>
        <span id="description" style={{ display }}>
          주 연장 근로 시간 (1일 8시간, 1주 40시간 초과한 시간) {description}
        </span>
      </div>

      <div className="vmw-answer">
        <input id="input-styled" type={type} placeholder={placeholder} />
        <span>{unit}</span>
      </div>
    </div>
  );
};

ViewMyWorkOption.propTypes = {
  option: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default ViewMyWorkOption;
