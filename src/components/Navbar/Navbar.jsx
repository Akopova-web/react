import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return <nav className={classes.nav}>
    <ul>
      <li><NavLink className={classes.items} to="/profile" activeClassName={classes.activeLink}>
        Профиль</NavLink></li>
      <li><NavLink className={classes.items} to="/diary" activeClassName={classes.activeLink}>
        Дневник</NavLink></li>
      <li><NavLink className={classes.items} to="/timetable" activeClassName={classes.activeLink}>
        Расписание</NavLink></li>
      <li><NavLink className={classes.items} to="/dialogs" activeClassName={classes.activeLink}>
        Сообщения</NavLink></li>
      <li><NavLink className={classes.items} to="/friends" activeClassName={classes.activeLink}>
        Друзья</NavLink></li>
    </ul>
  </nav>
}

export default Navbar;