import '../../App.css'
import React from "react";
import {Dialogs} from "./Dialogs";
import {
    addNewMessageTextActionCreator,
    UpdateNewMessageTextActionCreator
} from "../../redux/Reducers/dialogs-reducer";
import {connect} from "react-redux";
import {whitAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";


const mapStateToProps = (state:AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        newPostMessage: state.dialogsPage.newPostMessage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        newValueOnChangeMessage: (text: string) => {
            dispatch(UpdateNewMessageTextActionCreator(text))
        },
        addMessageButton: (currentText: string) => {
            dispatch(addNewMessageTextActionCreator(currentText))
        },
    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps),whitAuthRedirect) (Dialogs);
