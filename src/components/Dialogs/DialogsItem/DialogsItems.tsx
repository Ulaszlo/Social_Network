import {Link} from "react-router-dom";
import s from '../Dialogs.module.css'
import React from 'react';
import { DialogType} from "../../../redux/Reducers/dialogs-reducer";

export const DialogsItems = (props:DialogType) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.dialogsItem}>
        <Link to={path}>{props.name}</Link>

    </div>
}