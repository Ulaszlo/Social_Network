import React from "react";
import {getProfile, getUserStatus, setUserProfile, updateUserStatus} from "../../redux/Reducers/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Profile} from "./Profile";
import {whitAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateProps={
    profile: number | null
    UserStatus:string
}
type MapDispatchProps={
    setUserProfile:()=>void
    getProfile:(userId:number)=>void
    getUserStatus:(userId:number)=>void
    updateUserStatus:(NewStatus:string)=>void
}
 export type ProfileContainerType = MapStateProps & MapDispatchProps
class ProfileContainer extends React.PureComponent<ProfileContainerType> {
    componentDidMount() {
        // @ts-ignore
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        // @ts-ignore
        let NewStatus:string = this.props.NewStatus
        this.props.getProfile(userId)
        debugger;
        this.props.getUserStatus(userId)
        this.props.updateUserStatus(NewStatus)
    }

    render() {

        return(<>

            <Profile {...this.props} profile={this.props.profile} UserStatus={this.props.UserStatus}
                           updateUserStatus={this.props.updateUserStatus}/>

        </>)

    }
}

let mapStateToProps = (state:AppStateType) => ({
    profile: state.profilePage.profile,
    UserStatus: state.profilePage.UserStatus,


})
export default compose(connect(mapStateToProps, {
    setUserProfile,
    getProfile,
    getUserStatus,
    updateUserStatus
}), withRouter, whitAuthRedirect)(ProfileContainer)





