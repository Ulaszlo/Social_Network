import {Action,applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {profileReducer} from "./Reducers/profile-reducer";
import {dialogsReducer} from "./Reducers/dialogs-reducer";
import {usersReducer} from "./Reducers/users-reducer";
import {authReducer} from "./Reducers/auth-reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import {appReducer} from "./Reducers/app-reducer";

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth:authReducer,
    app:appReducer,
})
export let store = createStore(reducer,applyMiddleware(thunkMiddleware))
export type RootReducersType= typeof reducer
export type AppStateType = ReturnType<RootReducersType>;
// типизация санок
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>