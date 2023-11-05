import s from './Dialogs.module.css'
import '../../App.css'
import {Message} from "./Message/Message";
import {DialogsItems} from "./DialogsItem/DialogsItems";
import React from "react";
import {Redirect} from "react-router-dom";
import {DialogsDataType, DialogType} from "../../redux/Reducers/dialogs-reducer";
type DialogsPropsType = {
    dialogsPage:DialogsDataType
    dialogsData:Array<DialogType>
    isAuth:boolean
}
export const Dialogs = (props: DialogsPropsType) => {
    // let newPostMessageProps = props.newPostMessage
    // const newValueOnChangeMessage = () => {
    //
    //     let text = newMessageElement.current.value
    //     props.newValueOnChangeMessage(text)
    //
    // }
    let newMessageElement = React.createRef();

    // let addMessageButton = (currentText: string) => {
    //     let text:unknown = newMessageElement.current.value
    //     props.addMessageButton(text)
    //
    // }
    let state = props.dialogsPage

// @ts-ignore
    let dialogsElement = state.dialogsData.map((d: { name: string; id: number; }) => < DialogsItems name={d.name} id={d.id}/> )
    // @ts-ignore
    let messageElement = state.messageData.map((message: { message: string; id: number; }) => <Message
        message={message.message} id={message.id}/>)

    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }
    return (

        <div className={s.dialogs}>

            <div >

               <div className={s.dialogsItem}>{dialogsElement}</div>
            </div>

            <div className={s.messages}>
                <div>{messageElement}</div>
                {/*<div>*/}
                    {/*<div> <textarea value={newPostMessageProps}*/}
                    {/*                onChange={newValueOnChangeMessage}*/}
                    {/*                ref={newMessageElement}> </textarea></div>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button onClick={addMessageButton}>Add message</button>*/}
                {/*</div>*/}
            </div>

        </div>
    )

}