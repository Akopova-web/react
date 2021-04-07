import React from "react";
import Preloader from "../../../common/Preloader";
import classes from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/Images/empty_avatar.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ changePhoto, isOwner, userId, profile, status, updateUserStatus }) => {
    if (!profile) {
        return <Preloader />
    }

    const onChoseImage = (e) => {
        e.target.files.length && changePhoto(e.target.files[0])
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img alt="" src={profile.photos.large != null ? profile.photos.large : userPhoto} />
                {isOwner && !profile.photos.large && <input type="file" onChange={onChoseImage} />}
                <div><b>{profile.fullName}</b></div>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
                <div>
                    About me: {!profile.aboutMe ? "No telling" : profile.aboutMe}
                </div>
                <div>
                    Looking for job: {!profile.lookingForAJob ? "No" : "Yes"}
                </div>
                {profile.lookingForAJob && <div>{profile.lookingForAJobDescription}</div>}
                <div><b>Contacts:</b> {Object.keys(profile.contacts)
                    .map(key => <Contact contactTitle = {} contactValue = {} />)}
                </div>
            </div>
        </div>
    );
};

const Contact = (contactTitle, contactValue) => {
    return <div>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo;