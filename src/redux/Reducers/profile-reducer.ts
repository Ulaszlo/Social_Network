import {profileAPI} from "../../api/api";
import {Dispatch} from "redux";
// Тип инициализационного стейта
export type ProfileInitialStateType = {
    newPostText: string
    posts: Array<PostType>
    profile:TypeProfileDataType | null | number
    UserStatus: string
}
// Тип объетка в массиве posts
export type PostType = {
    message: string
    likeCount: number
}
//Обший тип для actions
export type AllActionsType = AddPostActionCreatorType | setUserProfileType | setStatusACType | updateUserStatusACType | setUserPhotoType
//Инициализационный стейт
let initialState: ProfileInitialStateType = {
    newPostText: '',
    posts: [
        {message: 'React надо учить по-настоящему, или его совсем не учить. Середины тут быть не может.', likeCount: 0},
        {
            message: 'Надо иметь в голове чёткую картину того, чего хочешь достичь, и стремиться к этой цели каждый день',
            likeCount: 21
        },
        {message: 'Всем привет! это мой первый пост.)))))', likeCount: 11},
    ],
    profile: null,
    UserStatus: ''
}
// names for types of action
const ADD_POST = "profile-reducer/ADD-POST"
const SET_USER_PROFILE= "profile-reducer/SET-USER-PROFILE"
const SET_STATUS = "profile-reducer/SET-STATUS"
const UPDATE_USER_STATUS= "profile-reducer/UPDATE-USER-STATUS"
const SAVE_USER_PHOTO= "profile-reducer/SAVE-USER-PHOTO"
// profileReducer
export const profileReducer = (state = initialState, action: AllActionsType): ProfileInitialStateType => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {message: action.currentPostText, likeCount: 0}
            let stateCopy = {
                ...state,
                posts: [newPost, ...state.posts,],
            }
            stateCopy.newPostText = ''

            return stateCopy;
        }
        case SAVE_USER_PHOTO:
            // @ts-ignore
            return {...state, profile: {...state.profile, photos: action.photos }}

        // case
        // "UPDATE-NEW-POST-TEXT":
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        case SET_STATUS :
            return {...state, UserStatus: action.UserStatus}
        case UPDATE_USER_STATUS:
            return {...state, UserStatus: action.UserStatus}

        default :
            return state
    }
}
// Автоматически возвращаемый тип для AddPostActionCreator
export type AddPostActionCreatorType = ReturnType<typeof AddPostActionCreator>
// ActionCreator добавления поста
export const AddPostActionCreator = (currentPostText: string) => {
    return {
        type:ADD_POST,
        currentPostText

    } as const
}
// Автоматически возвращаемый тип для setUserProfileActionCreator
export type setUserProfileType = ReturnType<typeof setUserProfile>
// setUserProfileActionCreator
export const setUserProfile = (profile: number) => {
    return {type:SET_USER_PROFILE, profile} as const
}
// Thunks creator for getProfile
export const getProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
// Тип для setStatusAC
export type setStatusACType = ReturnType<typeof setStatusAC>
// setStatusActionCreator
export const setStatusAC = (UserStatus: string) => {
    return {type: SET_STATUS, UserStatus} as const
}

// Thunks creator for getUserStatus
export const getUserStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusAC(response.data))
        })
    }
}

type updateUserStatusACType = ReturnType<typeof updateUserStatusAC>
export const updateUserStatusAC=(newStatus:string)=>{
    return{type:UPDATE_USER_STATUS,UserStatus:newStatus} as const
}
type setUserPhotoType = ReturnType<typeof setUserPhoto>
export const setUserPhoto = (photos:any)=>{
    return {type:SAVE_USER_PHOTO,photos} as const
}
// Thunks creator for updateUserStatus
// export const savePhoto = (userPhoto: string) => {
//     return (dispatch: Dispatch) => {
//         profileAPI.savePhoto(userPhoto).then(response => {
//             dispatch(setUserPhoto(response.data.data.photos))
//
//         })
//     }
// }
export const savePhoto = (file:any) => async (dispatch:Dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(setUserPhoto(response.data.data.photos));
    }
}
export const updateUserStatus = (UserStatus: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(UserStatus).then(response => {
            dispatch(setStatusAC(UserStatus))

        })
    }
}
export type TypeProfileDataType = {
    aboutMe: string
    contacts:ContactsDataType
    fullName:string
    photos:PhotosDataType
    userId:number
}
export type PhotosDataType = {
    large:string
    small:string

}
export type ContactsDataType={
    github:string
    instagram:string
    vk:string
}