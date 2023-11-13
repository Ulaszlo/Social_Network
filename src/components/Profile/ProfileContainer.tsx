import React from "react";
import {
    getProfile,
    getUserStatus,
    savePhoto,
    setUserProfile,
    TypeProfileDataType,
    updateUserStatus
} from "../../redux/Reducers/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Profile} from "./Profile";
import {whitAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateProps = {
    profile: TypeProfileDataType
    UserStatus: string
    authorizedUserId: number | null
}
type MapDispatchProps = {
    setUserProfile: () => void
    getProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (NewStatus: string) => void
}
export type ProfileContainerType = MapStateProps & MapDispatchProps


class ProfileContainer extends React.PureComponent<ProfileContainerType> {
     refreshProfile= () => {
        // @ts-ignore
        let userId = this.props.match.params.userId
        if (!userId) {
            // userId = 30025
            // userId = 2
            userId = this.props.authorizedUserId;
        }
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        // @ts-ignore
        if ( this.props.match.params.userId !=prevProps.match.params.userId) {
            this.refreshProfile()

        }
    }

    render() {

        return (<>
            {/*// @ts-ignore*/}
            <Profile   savePhoto={this.props.savePhoto}  isOwner={!this.props.match.params.userId}
                       {...this.props}  profile={this.props.profile}/>
        </>)

    }
}

let mapStateToProps = (state: AppStateType) => ({

    profile: state.profilePage.profile,
    UserStatus: state.profilePage.UserStatus,
    authorizedUserId:state.auth.userId,

})
export default compose(connect(mapStateToProps, {
    setUserProfile,
    getProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
}), withRouter, whitAuthRedirect)(ProfileContainer)





