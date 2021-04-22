import React from 'react';

import { UserRowInterface } from './users-list/user-row';
import PageHeading from './page-heading';

interface UserInterface extends UserRowInterface {}

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
            <PageHeading>User</PageHeading>
            <UserModalRow class="name" label="Name" value={user.name} />
            <UserModalRow class="role" label="Role" value={user.role} />
        </div>
    );
}
