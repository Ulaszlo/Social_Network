import {authAPI} from "../../api/api"
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";

export type AuthInitialStateType = {
    auth?: any;
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    authorizedUserId?: number | null
}

export type authDataType = {
    id: null | number
    email: null | string
    login: null | string
}
let initialState: AuthInitialStateType = {

    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authorizedUserId:null,

}
// типизация санок
type thunkType = ThunkAction<any, AppStateType, unknown, authActionsType>
type authActionsType = setUserDataType
// action
const SetUserData = "auth-reducer/SET-USER-DATA"
// reducer
export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SetUserData:
            return {...state, ...action.data,}
        default:
            return {...state}
    }
}

type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: SetUserData,
        data: {userId, email, login, isAuth},
    } as const
}
// санки
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.auth()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true))

    }

}


export const login = (email: string | null, password: string | null, rememberMe: boolean) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }

}

export const logout = () => {
    return async (dispatch: Dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}