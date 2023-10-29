import React from 'react';
import '../../App.css'
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {Preloader} from "../common/Preloader";
import {ProfileContainerType} from "./ProfileContainer";

export const Profile = (props: ProfileContainerType) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    }
    return (
        < >
            <ProfileInfo profile={props.profile} UserStatus={props.UserStatus}
                          updateUserStatus={props.updateUserStatus}/>

            <div className={s.content}>
                <MyPostsContainer className={s.profileInfoWrapper}  profile={props.profile}/>
            </div>

        </>
    );
};

