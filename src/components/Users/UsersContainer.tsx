import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/Reducers/users-reducer";
import React from "react";
import Users from "./Users";
import {Preloader} from "../common/Preloader";
import {getCurrentPage, getPageSize, getTotalUsersCount, getUsers} from "../../selectors/user-selectors";

export class UsersAPI extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
this.props.getUsers(this.props.currentPage,this.props.pageSize)

    }

    onPageChanged = (currentPage: number) => {

        this.props.getUsers(currentPage)
        this.props.setCurrentPage(currentPage)

    }

    render() {


        return (
            <> {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                /></>
        )

    }
}

let mapStateToProps = (state: any) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: state.usersPage.isFetching
    }
}


export const UsersContainer = connect(mapStateToProps, {
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    getUsers: requestUsers,
})(UsersAPI)