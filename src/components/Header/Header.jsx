import React from "react";
import classes from './Header.module.css'
import logo from '../../assets/Images/logo2.png'

const Header = () => {
  return (
    <header className={classes.header}>
    <img src={logo} />
      {/* <img src="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/make-a-gaming-logo/gaming-logo-maker-for-an-rpg-guild.png"></img> */}
    </header>
  );
};

export default Header;
