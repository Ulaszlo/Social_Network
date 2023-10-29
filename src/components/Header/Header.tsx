import React from 'react';
import {Link} from 'react-router-dom';
import s from './Header.module.css'
import {Button} from "@mui/material";

type HeaderType ={
    login: null | string
    isFetching: null | boolean
    isAuth: boolean
    logout: () => void
    setAuthUserData:() => void
    authStatus:() => void
}
export const Header = (props: HeaderType) => {
    return (

        <header className={s.header}>
            <img className={s.headerLogo}
                 src='https://freesvg.org/storage/img/thumb/JoelM-biodegradable.png'/>
            {props.isAuth ?
                <div className={s.loginBlock}><div>{props.login}</div><div>

                    <Button size="small" onClick={props.logout}>Log out</Button></div></div> :
                <div className={s.loginBlock}><Link to='/login'>Login </Link></div>}
        </header>


    );
};

