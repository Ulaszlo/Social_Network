import React from 'react'
import {TypeProfileDataType} from "../../redux/Reducers/profile-reducer";
type ProfileDataType = {
    profile:TypeProfileDataType
}
export const ProfileData = (props:ProfileDataType) => {
    return (
        <div>
        <div>{props.profile.aboutMe}</div>
        </div>
    )
}