import {usersAPI} from "../../api/api";
import {Dispatch} from "redux";
// type for UsersInitialStateType
export type UsersInitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
// type for  UserLocation
type UserLocationType = {
    city: string
    country: string
}
// type for users obj
export type UserType = {
    id: string
    photoUrl?: string
    followed: boolean
    name: string
    status: string
    location: UserLocationType
    photos: {
        small: string
        large: string
    }
}
// initialState for Users
let initialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: true,
}
// All types for actions
export type AllUsersActionsType= setIsFetchingType|setCurrentPageType |followType |unfollowType |setUsersType |setTotalUsersCountType
// usersReducer
export const usersReducer = (state = initialState, action: any): UsersInitialStateType => {
    switch (action.type) {
        case 'FOLLOW' :
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'SET-TOTAL-COUNT':
            return {
                ...state, totalUsersCount: action.count
            }

        case 'UNFOLLOW':
            return {

                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {


                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case 'SET-USERS':
            return {...state, users: action.users}

        case 'SET-CURRENT-PAGE' :
            return {...state, currentPage: action.currentPage}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }
}
// type for setIsFetching
export type setIsFetchingType = ReturnType<typeof setIsFetching>
// setIsFetching ActionCreator
export const setIsFetching = (isFetching: boolean) => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching} as const
}
// type for setCurrentPage
export type setCurrentPageType = ReturnType<typeof setCurrentPage>
// setCurrentPage ActionCreator
export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage}
}
// type for follow
export type followType = ReturnType<typeof follow>
// follow ActionCreator
export const follow = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
}
// type for unfollow
export type unfollowType= ReturnType<typeof unfollow>
// unfollow ActionCreator
export const unfollow = (userId: number) => {
    return {type: 'UNFOLLOW', userId} as const
}
// type for setUsers
export type setUsersType = ReturnType<typeof setUsers>
// setUsers ActionCreator
export const setUsers = (users: any) => {
    return {type: 'SET-USERS', users} as const
}
// type for  setTotalUsersCount
export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
// setTotalUsersCount ActionCreator
export const setTotalUsersCount = (count: number) => {
    return {type: 'SET-TOTAL-COUNT', count} as const
}
// thanks
export const requestUsers = (currentPage: number, pageSize: number) => {

    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        // dispatch(setCurrentPage(currentPage))

        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setUsers(data.items))
            dispatch(setIsFetching(false))
            // dispatch((setTotalUsersCount(data.totalUserCount)))
        })
    }
}