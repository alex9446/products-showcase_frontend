import { mdiPencil } from '@mdi/js';
import React from 'react';

import LinkIcon from '../icon/link-icon';

export interface UserRowInterface {
    id: string,
    name: string,
    role: string
}

export default function UserRow(props: UserRowInterface) {
    return (
        <div className="user-row">
            <div className="name">{props.name}</div>
            <div className="role">{props.role}</div>
            <div className="action">
                <LinkIcon to={`/users?user=${props.id}`} path={mdiPencil} class="edit-icon" />
            </div>
        </div>
    );
}
