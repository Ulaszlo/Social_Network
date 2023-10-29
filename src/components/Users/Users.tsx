import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/imges/Professional-Man-Avatar.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

export const Users = (props: any) => {
    debugger;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    // @ts-ignore
    return (
        <div>
            {pages.map(p => {

                // @ts-ignore

                return <button className={props.currentPage === p && s.usersPageNumber} onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</button>
            })}
            {
                props.users.map((u: { id: React.Key | null | undefined; followed: any; photos: { small: string | null | undefined; }; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
                    <div key={u.id}>
                        <div>
                            {u.followed ? <button onClick={() => {
                                usersAPI.unFollow(u.id).then((response: { data: { resultCode: number; }; }) => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })

                            }}>UnFollow</button> : <button onClick={() => {


                                usersAPI.follow(u.id).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })
                            }}>Follow</button>}

                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.photoUrl} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </NavLink>

                        </div>
                        <span><div>{u.name}</div></span>


                        <div><span> {'u.location.city'}</span>
                            <span> {'u.location.country'}</span>
                        </div>
                    </div>)
            }
        </div>
    )
};

export default Users;