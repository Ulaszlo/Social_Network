import React from 'react';
import { Paginator } from '../common/Paginator';
import {User} from "./User";

export const Users = (props: any) => {

    return (<div>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged} portionSize={10}  />
           <User {...props}/>
        </div>
    )
};

export default Users;