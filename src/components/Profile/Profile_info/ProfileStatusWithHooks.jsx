import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect (() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }
    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    }

    return (
        <div>
            {!editMode
                ? <div onDoubleClick={activateEditMode}>{props.status || "No status"}</div>
                : < input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status} />
            }
        </div>
    );
}


export default ProfileStatusWithHooks;
