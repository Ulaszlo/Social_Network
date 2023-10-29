import s from './Nav.module.css'
import {Link} from "react-router-dom";

export const Nav = () => {
    return (
        <nav className={s.nav}>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://freesvg.org/storage/img/thumb/tree6.png"/>*/}
            {/*</div>*/}

            <div className={s.navItem}>
                <div className={s.navDiv}>
                    <div className={s.item}><Link to='/profile'>Profile </Link></div>
                </div>
                <div className={s.navDiv}>
                    <div className={s.item}><Link to="/dialogs">Messages</Link></div>
                </div>
                <div className={s.navDiv}>
                    <div className={s.item}><Link to="/music">Music</Link></div>
                </div>
                <div className={s.navDiv}>
                    <div className={s.item}><Link to='/users'>Users </Link></div>
                </div>
                <div className={s.navDiv}>
                    <div className={s.item}><Link to="/news">News</Link></div>
                </div>
                <div className={s.navDiv}>
                    <div className={s.item}><Link to="/settings">Settings</Link></div>
                </div>
            </div>
        </nav>
    )
}