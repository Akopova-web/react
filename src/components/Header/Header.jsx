import React from "react";
import classes from './Header.module.css'
import logo from '../../assets/Images/logo2.png'
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src={logo} />

      <div className={classes.loginBlock}>
        { props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink> }
      </div>
    </header>
  );
};

export default Header;
