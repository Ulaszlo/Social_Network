// type for initialState in Dialogs
export type DialogsInitialStateType = {
    newPostMessage: string
    dialogsData: DialogsDataType
    messageData: MessageDataType
}
// type for object of dialogsData
export type DialogType = {
    id: number
    name: string
}
// type for object of messageData
export type MessageType = {
    id: number
    message: string
}
// type for array of dialogsData
export type DialogsDataType = Array<DialogType>
// type for array of messageData
export type MessageDataType = Array<MessageType>
// initialState for Dialogs
let initialState: DialogsInitialStateType = {
    newPostMessage: 'ggg',
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Anton'},
        {id: 6, name: 'Sasha'},
    ],
    messageData: [
        {id: 0, message: 'Hi',},
        {id: 1, message: 'Privet'},
        {id: 2, message: 'He'},
        {id: 3, message: 'ooy'},
        {id: 4, message: 'Yo'},
        {id: 5, message: '89883456380'},
    ]
}
export type AllDialogsActionsType = UpdateNewMessageTextACType | addNewMessageTextAC
// dialogsReducer
export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: AllDialogsActionsType): DialogsInitialStateType => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE" :
            return {
                ...state,
                messageData: [...state.messageData, {id: 6, message: state.newPostMessage}],
                newPostMessage: ""
            }


        case "UPDATE-NEW-MESSAGE-TEXT":
            return {
                ...state,
                newPostMessage: action.newMessage
            }


        default :
            return state
    }
}
// type for UpdateNewMessageTextActionCreator
export type UpdateNewMessageTextACType = ReturnType<typeof UpdateNewMessageTextActionCreator>
// ActionCreator for updating new message text
export const UpdateNewMessageTextActionCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessage: text,
    } as const
}
//  type for addNewMessageTextActionCreator
type addNewMessageTextAC = ReturnType<typeof addNewMessageTextActionCreator>
//ActionCreator for adding messages text
export const addNewMessageTextActionCreator = (text: string) => {
    return {
        type: "ADD-NEW-MESSAGE",
        currentText: text
    } as const
}
