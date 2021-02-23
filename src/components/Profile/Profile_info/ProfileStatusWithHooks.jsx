import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = ({status, updateUserStatus}) => {
    let [editMode, setEditMode] = useState(false);
    let [newStatus, setStatus] = useState(status);

    useEffect (() => {
        setStatus(status);
    }, [status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        updateUserStatus(newStatus);
    }
    
    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    }
    return (
        <div>
            {!editMode
                ? <div onDoubleClick={activateEditMode}>{status || "No status"}</div>
                : < input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={newStatus} />
            }
        </div>
    );
}


export default ProfileStatusWithHooks;
