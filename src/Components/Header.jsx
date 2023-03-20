import React from "react";
import logo from "./images/Logonetflix.png";
import { Link } from "react-router-dom";
import {ImSearch} from 'react-icons/im';
import './Styles/Header.scss';

const Header = () => {


  return (
    <nav className="header">

      <img src={logo} alt="logo" />

      <div>
      <Link to='/'>Tv Shows</Link>
      <Link to='/movies'>Movies</Link>
      <Link to='/recently'>Recently Added</Link>
      <Link to='/mylist'>MyList</Link>
      </div>

      <ImSearch />
    </nav>
  );
};

export default Header;
