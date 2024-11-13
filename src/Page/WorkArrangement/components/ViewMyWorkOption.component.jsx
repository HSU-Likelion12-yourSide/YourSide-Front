import React from 'react';
import PropTypes from 'prop-types';
import VmwInputAnswer from './type/VmwInputAnswer.component';
import VmwBinaryAnswer from './type/VmwBinaryAnswer.component';
import VmwMultiAnswer from './type/VmwMultiAnswer.component';

const ViewMyWorkOption = ({
  option,
  display = 'none',
  description,
  type = 'input',
  placeholder = '시간을 입력해주세요.',
  unit,
  warning,
  name,
  onChange,
}) => {
  const handleInputChange = e => {
    onChange(e);
  };
  return (
    <div className="vmw-group">
      <div className="vmw-question">
        <span>{option}</span>
        <span id="description" style={{ display }}>
          {description}
        </span>
      </div>
      {(() => {
        if (type === 'input') {
          return (
            <VmwInputAnswer
              placeholder={placeholder}
              unit={unit}
              warning={warning}
              name={name}
              onChange={handleInputChange}
            />
          );
          // type: input
        }
        if (type === 'binary') {
          return (
            <VmwBinaryAnswer
              placeholder={placeholder}
              warning={warning}
              name={name}
              onChange={handleInputChange}
            />
          );
          // type: binary
        }
        return (
          <VmwMultiAnswer
            placeholder={placeholder}
            warning={warning}
            name={name}
            onChange={handleInputChange}
          />
        );
        // type: multi
      })()}
      {/* 삼항연산 방법 -> eslint no-nested-ternary 규칙으로 사용 불가능 */}
      {/* {type === 'input' ? (
        <VmwInputAnswer placeholder={placeholder} unit={unit} />
      ) : type === 'binary' ? (
        <VmwBinaryAnswer placeholder={placeholder} />
      ) : (
        <VmwBinaryAnswer placeholder={placeholder} />
      )} */}

      {/* <VmwInputAnswer placeholder={placeholder} unit={unit} /> */}
      {/* <VmwBinaryAnswer placeholder={placeholder} /> */}
      {/* <VmwBinaryAnswer placeholder={placeholder} /> */}
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
  warning: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// 기본값 설정
// ViewMyWorkOption.defaultProps = {
//   description: '기본 설명이 필요할 때 사용됩니다.',
//   placeholder: '기본 설명이 필요할 때 사용됩니다.',
//   unit: '기본 설명이 필요할 때 사용됩니다.',
//   warning: '기본 설명이 필요할 때 사용됩니다.',
// };

export default ViewMyWorkOption;
