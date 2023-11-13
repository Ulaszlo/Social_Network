import React from 'react';
import '../../App.css'
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {Preloader} from "../common/Preloader";
import { TypeProfileDataType} from "../../redux/Reducers/profile-reducer";
type ProfilePropsType={
    profile:TypeProfileDataType
    getProfile:(userId:number)=>void
    UserStatus:string
    updateUserStatus: (NewStatus: string) => void
    getUserStatus:(userId: number)=>void
    isOwner:boolean
    savePhoto:(userPhoto:any)=>void
}
export const Profile = (props: ProfilePropsType) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    }
    // @ts-ignore
    return (

        < >
            <ProfileInfo getUserStatus={props.getUserStatus} getProfile={props.getProfile} profile={props.profile}
                         UserStatus={props.UserStatus} updateUserStatus={props.updateUserStatus} isOwner={props.isOwner}
                         savePhoto={props.savePhoto}/>

            <div className={s.content}>
                {/*// @ts-ignore*/}
                <MyPostsContainer className={s.profileInfoWrapper}  profile={props.profile}/>
            </div>

        </>
    );
};

