
import {getAuthUserData} from "./auth-reducer";
// type for all actions
type AllAppActionType=initializedSuccessType
//
export type AppInitialStateType={
    initialized:boolean
}
//
let AppInitialState:AppInitialStateType={
    initialized:false
}
//
const SET_INITIALIZED = "SET-INITIALIZED"
//
export const appReducer=(state=AppInitialState,action:AllAppActionType)=>{
    switch (action.type) {
        case "SET-INITIALIZED":
            return {
                ...state, initialized:true
            }

        default:
            return {...state}
    }
}
//
type initializedSuccessType = ReturnType<typeof initializedSuccess >
export const initializedSuccess =() =>({
    type:"SET-INITIALIZED",
})
//thankAC
export const initializedApp= () => (dispatch:any) => {
        let promise = dispatch(getAuthUserData())
        promise.then( dispatch(initializedSuccess()))
    }

