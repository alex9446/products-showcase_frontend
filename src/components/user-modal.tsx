import React from 'react';

import ExitIcon from './icon/exit-icon';
import { UserRowInterface } from './users-list/user-row';
import PageHeading from './page-heading';

interface UserInterface extends UserRowInterface {
    first_name: string|null,
    last_name: string|null
}

interface UserModalInterface {
    children: UserInterface
}

interface UserModalRowInterface {
    class: string,
    label: string,
    value: string
}

function UserModalRow(props: UserModalRowInterface) {
    return (
        <div className={props.class}>
            <div>{props.label}:</div>
            <div>{props.value}</div>
        </div>
    );
}

export default function UserModal(props: UserModalInterface) {
    const user = props.children;

    return (
        <div className="user-modal">
            <ExitIcon to="/users" />
            <PageHeading>User</PageHeading>
            <UserModalRow class="name" label="Name" value={user.name} />
            <UserModalRow class="first-name" label="First name" value={user.first_name} />
            <UserModalRow class="last-name" label="Last name" value={user.last_name} />
            <UserModalRow class="role" label="Role" value={user.role} />
            <button className="save">Save</button>
            <button className="delete">Delete User</button>
        </div>
    );
}
