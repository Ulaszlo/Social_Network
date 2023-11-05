import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthInitialStateType, getAuthUserData, logout, setAuthUserData} from "../../redux/Reducers/auth-reducer";
type HeaderContainerType =mapStateToPropsType & mapDispatchToPropsType;
type mapStateToPropsType = {
    login: null | string
    isFetching: null | boolean
    isAuth: boolean
};
type mapDispatchToPropsType = {
    logout: () => void
    getAuthUserData:() => void
    authStatus:() => void
};

class HeaderComponent extends React.Component<HeaderContainerType> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.getAuthUserData()

    }

    render = () => {
        return (
            <Header setAuthUserData={function (): void {
                throw new Error("Function not implemented.");
            }} {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AuthInitialStateType) => {

    return {
        // @ts-ignore
        isAuth: state.auth.isAuth,
        // @ts-ignore
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthUserData,getAuthUserData: getAuthUserData,logout})(HeaderComponent)