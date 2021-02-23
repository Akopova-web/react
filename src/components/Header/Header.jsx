import React from "react";
import classes from './Header.module.css'
import logo from '../../assets/Images/logo2.png'
import { NavLink } from "react-router-dom";

const Header = ({isAuth, login, logoutUser}) => {
  return (
    <header className={classes.header}>
      <img alt="" src={logo} />

      <div className={classes.loginBlock}>
        { isAuth 
        ? <div>{login} - <button onClick={logoutUser}>Log out</button></div> 
        : <NavLink to='/login'>Login</NavLink> }
      </div>
    </header>
  );
};

export default Header;
