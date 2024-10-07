import React from 'react';
import PropTypes from 'prop-types';

const MainShortCut = ({ id, text, img, alt, onClick }) => {
  return (
    <div
      id={id}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <div>{text}</div>
      <div>
        <img src={img} alt={alt || 'image description'} />
      </div>
    </div>
  );
};

MainShortCut.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

MainShortCut.defaultProps = {
  alt: 'image description',
};

export default MainShortCut;
