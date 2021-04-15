import React from 'react';

export interface UserRowInterface {
    name: string,
    role: string
}

export default function UserRow(props: UserRowInterface) {
    return (
        <div className="user-row">
            <div className="name">{props.name}</div>
            <div className="role">{props.role}</div>
            <div className="action">✏️</div>
        </div>
    );
}
