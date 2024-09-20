import React from 'react';
import PropTypes from 'prop-types';

const MainShortCut = ({ text, img, alt, onClick, border }) => {
  const styles = {
    container: {
      backgroundColor: '#FFFFFF',
      marginTop: '63.86px',
      display: 'flex',
      width: '92px',
      height: '24px',
      padding: '12px 16px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '4px',
      border,
    },
    text: {
      color: '#111',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '20px',
      width: '64px',
      height: '20px',
      whiteSpace: 'nowrap',
    },
    img: {
      width: '24px',
      height: '24px',
    },
  };

  return (
    <div
      style={styles.container}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <div style={styles.text}>{text}</div>
      <div>
        <img style={styles.img} src={img} alt={alt || 'image description'} />
      </div>
    </div>
  );
};

MainShortCut.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  border: PropTypes.string.isRequired,
};

MainShortCut.defaultProps = {
  alt: 'image description',
};

export default MainShortCut;
