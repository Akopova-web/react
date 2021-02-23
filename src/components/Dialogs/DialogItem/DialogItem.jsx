import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

const DialogItem = ({id, name}) => {
    let path = "/dialogs/" + id;
    return <div className={classes.dialog}>
        <img src="https://golos.ua/images/items/2020-08/02/CxJ6myL6cfYB26Mn/img_top.jpg" alt=""/>
        <NavLink to={path}>{name}</NavLink>
    </div>
}

export default DialogItem;