import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
let mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.isAuth
})
export const whitAuthRedirect=(Component:any)=>{
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>

            return <Component{...this.props}/>
        }
    }

    let ConnectedAuthRedirecComponent=connect(mapStateToPropsForRedirect) (RedirectComponent)
    return ConnectedAuthRedirecComponent;
}