import { mdiPencil } from '@mdi/js';
import React from 'react';

import Icon from '../icon/icon';

export interface UserRowInterface {
    name: string,
    role: string
}

export default function UserRow(props: UserRowInterface) {
    return (
        <div className="user-row">
            <div className="name">{props.name}</div>
            <div className="role">{props.role}</div>
            <div className="action">
                <Icon path={mdiPencil} class="edit-icon" />
            </div>
        </div>
    );
}
