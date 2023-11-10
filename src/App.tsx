import React from 'react';
import DialogsContainer from './components/Dialogs/DialogsConatainer';
import HeaderComponent from "./components/Header/HeaderComponent";
import ProfileContainer from './components/Profile/ProfileContainer';
import {UsersContainer} from "./components/Users/UsersContainer";
import {Nav} from "./components/Navbar/Nav";
import {Route} from 'react-router-dom';
import Login from "./components/Login/Login";
import {AppStateType} from "./redux/redux-store";
import {connect} from "react-redux";
import {initializedApp} from "./redux/Reducers/app-reducer";
import {compose} from "redux";
import {Preloader} from "./components/common/Preloader";



class App extends React.Component<mapStatePropsType & mapDispatchPropsType> {
    componentDidMount() {
         this.props.initializedApp()
    }

    render() {
                if (!this.props.initialized) {
                    return <Preloader/>
                }
        return (
            <div>
                <HeaderComponent isFetching={null} authStatus={function(): void {
                    throw new Error('Function not implemented.');
                } }/>
                <div className='app-wrapper'>
                    <Nav/>
                    <div className='app-wraper-content'>

                        <>
                            <Route exact path={"/dialogs"} component={DialogsContainer}/>
                            {/*// @ts-ignore*/}
                            <Route exact path="/profile/:userId?" component={ProfileContainer}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/users" component={UsersContainer}/>
                        </>
                    </div>
                </div>
            </div>
        );
    }
}
type mapStatePropsType = {
    initialized:boolean
}
type mapDispatchPropsType = {
    initializedApp:any
}
const mapStateToProps = (state:AppStateType) => {

    return {
        initialized: state.app.initialized,
    }
}
export default compose (connect(mapStateToProps, {initializedApp})(App));