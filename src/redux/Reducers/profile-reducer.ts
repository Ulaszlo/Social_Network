import {profileAPI} from "../../api/api";
import {Dispatch} from "redux";
// Тип инициализационного стейта
export type ProfileInitialStateType = {
    newPostText: string
    posts: Array<PostType>
    profile: null | number
    UserStatus: string
}
// Тип объетка в массиве posts
export type PostType = {
    message: string
    likeCount: number
}
//Обший тип для actions
export type AllActionsType = AddPostActionCreatorType | setUserProfileType | setStatusACType
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
    UserStatus: ' '
}
// profileReducer
export const profileReducer = (state = initialState, action: AllActionsType): ProfileInitialStateType => {
    debugger
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {message: action.currentPostText, likeCount: 0}
            let stateCopy = {
                ...state,
                posts: [newPost, ...state.posts,],
            }
            stateCopy.newPostText = ''

            return stateCopy;
        }

        // case
        // "UPDATE-NEW-POST-TEXT":
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }

        case "SET-STATUS" :
            return {...state, UserStatus: action.UserStatus}
        // case "UPDATE-USER-STATUS":
        //     return {...state, UserStatus: action.newStatus}
        default :
            return state
    }
}
// Автоматически возвращаемый тип для AddPostActionCreator
export type AddPostActionCreatorType = ReturnType<typeof AddPostActionCreator>
// ActionCreator добавления поста
export const AddPostActionCreator = (currentPostText: string) => {
    return {
        type: "ADD-POST",
        currentPostText

    } as const
}
// Автоматически возвращаемый тип для setUserProfileActionCreator
export type setUserProfileType = ReturnType<typeof setUserProfile>
// setUserProfileActionCreator
export const setUserProfile = (profile: number) => {
    return {type: "SET-USER-PROFILE", profile} as const
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
    return {type: "SET-STATUS", UserStatus} as const
}
// Thunks creator for getUserStatus
export const getUserStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusAC(response.data))
        })
    }
}


const updateUserStatusAC=(newStatus:string)=>{
    return{type:"UPDATE-USER-STATUS",UserStatus:newStatus}
}

// Thunks creator for updateUserStatus
export const updateUserStatus = (UserStatus: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(UserStatus).then(response => {
            dispatch(setStatusAC(UserStatus))

        })
    }
}