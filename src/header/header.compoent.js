import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../asset/crown.svg.svg';


const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo />
    </Link>

    <div className="options">
      <Link to="/shop" className="option">Shop</Link>
      <Link to="/contract" className="option">Contract</Link>
    </div>
  </div>
)

export default Header;