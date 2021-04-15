import React from 'react';

import UserRow, { UserRowInterface } from './user-row';

interface PropsInterface {
    children: UserRowInterface[]
}

export default function UsersList(props: PropsInterface) {
    return (
        <div className="users-list">
            {props.children.map(user => <UserRow name={user.name} role={user.role} />)}
        </div>
    );
}
