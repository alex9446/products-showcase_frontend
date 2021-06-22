import { navigate } from 'gatsby';
import React, { useState } from 'react';

import ExitIcon from './icon/exit-icon';
import InputBox from './input-box';
import { UserRowInterface } from './users-list/user-row';
import PageHeading from './page-heading';
import { deleteUser, editUser } from '../utils/users';
import { consoleLogError } from '../utils/mixed';

export interface UserInterface extends UserRowInterface {
    first_name: string|null,
    last_name: string|null
}

interface UserModalInterface {
    children: UserInterface
}

interface UserModalRowInterface {
    class: string,
    label: string,
    value: string,
    onChange: Function
}

function UserModalRow(props: UserModalRowInterface) {
    return (
        <div className={props.class}>
            <div>{props.label}:</div>
            <InputBox onChange={props.onChange} type="text" value={props.value} />
        </div>
    );
}

export default function UserModal(props: UserModalInterface) {
    const user = props.children;
    const [name, setName] = useState(user.name);
    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [role, setRole] = useState(user.role);

    function handleSave(event: React.FormEvent) {
        event.preventDefault();
        const userData = {
            id: user.id,
            name: name,
            first_name: firstName,
            last_name: lastName,
            role: role,
        };
        editUser(userData)
        .then(() => navigate('/users'))
        .catch(consoleLogError);
    }

    function handleDelete(event: React.FormEvent) {
        event.preventDefault();
        deleteUser(user.id)
        .then(() => navigate('/users'))
        .catch(consoleLogError);
    }

    return (
        <div className="user-modal">
            <ExitIcon to="/users" />
            <PageHeading>User</PageHeading>
            <UserModalRow class="name" label="Name" value={name} onChange={setName} />
            <UserModalRow class="first-name" label="First name" value={firstName} onChange={setFirstName} />
            <UserModalRow class="last-name" label="Last name" value={lastName} onChange={setLastName} />
            <UserModalRow class="role" label="Role" value={role} onChange={setRole} />
            <button className="save" onClick={handleSave}>Save</button>
            <button className="delete" onClick={handleDelete}>Delete User</button>
        </div>
    );
}
