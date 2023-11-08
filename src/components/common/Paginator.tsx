import React from 'react';
import s from "../../components/Users/Users.module.css"


type PaginatorType = {
    totalUsersCount:number
    pageSize:number
    onPageChanged:(p:number)=>void
    currentPage:number

}

export const Paginator:React.FC<PaginatorType> = ({totalUsersCount,pageSize,onPageChanged,currentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => {
                // @ts-ignore
                return <button className={currentPage === p && s.usersPageNumber} onClick={() => {onPageChanged(p)}}>{p}</button>
            })}
        </div>
    )
}

