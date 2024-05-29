import React from 'react';

const Menu = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-number">{number}</div>
        <div className="card-title">{title}</div>
      </div>

      <p>{description}</p>
      <Link to={link} className="link">
        <div className="card-link">바로가기</div>
      </Link>
    </div>
  );
};

export default Menu;
