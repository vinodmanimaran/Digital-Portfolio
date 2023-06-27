import React from 'react';
import img from '../../assets/images/Home.png';
import './header.scss'; 


const Header = () => {
  return (
    <div className="header-container">
      <img src={img} alt="Home-page" className="header-image" />
    </div>
  );
};

export default Header;
