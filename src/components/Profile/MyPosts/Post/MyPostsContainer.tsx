import React from 'react';
import {AddPostActionCreator, PostType, updateUserStatus} from "../../../../redux/Reducers/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";

export type MyPostType= mapStatePropsType & mapDispatchPropsType & PropsType
type PropsType= {
    className:string
    profile:number | null
}
type mapStatePropsType ={
    posts: PostType
    newPostText:string

}
type mapDispatchPropsType={
    updateNewPostText:(text: string)=>void
    addPost:(currentPostText:string)=>void
}
let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch((updateUserStatus(text)))
        },
        addPost: (currentPostText:string) => {
            dispatch((AddPostActionCreator(currentPostText)))
        },
    }
}
// @ts-ignore
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

