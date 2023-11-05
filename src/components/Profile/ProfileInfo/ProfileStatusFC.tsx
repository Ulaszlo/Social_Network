import React, {ChangeEvent, useState} from 'react';
import s from "./ProfileStatus.module.css";
import {setStatusAC, updateUserStatusAC} from "../../../redux/Reducers/profile-reducer";

export const ProfileStatusFC = (props: any) => {
    const [editMode, setEditMode] = useState(false)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        setStatusAC(userStatus)
    }

    const [userStatus, setUserStatus] = useState(props.UserStatus)
    const onStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setUserStatus(e.currentTarget.value)
        updateUserStatusAC(e.currentTarget.value)

    }

    return (
        <div className={s.profileStatus}>
            {
                !editMode ? <div   ><span className={s.profileLight} onDoubleClick={activateEditMode}>{!userStatus?"Статус не установлен":userStatus}</span></div> :
                    <div>
                        <div className={s.aboutMe}>О себе:</div>
                        <input onChange={onStatusChanged} autoFocus={true} onBlur={deActivateEditMode}
                               value={userStatus}/></div>
            }
            
        </div>)
}
// onChange={onStatusChanged}

