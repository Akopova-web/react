import React from "react";
import Preloader from "../../../common/Preloader";
import classes from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/Images/empty_avatar.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={classes.image}>
                <img alt="" src="https://images.ctfassets.net/hrltx12pl8hq/hXPLBHmnfgxw58CeaaADd/34e2f72481af47c654279ba6d4e18044/shutterstock_1469674187.jpg?fit=fill&w=800&h=400"></img>
            </div>
            <div className={classes.descriptionBlock}>
                <img alt="" src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
                <div>{props.profile.fullName}</div>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
            </div>
        </div>
    );
};

export default ProfileInfo;
