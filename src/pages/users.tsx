import React from 'react';

import ExitIcon from '../components/icon/exit-icon';
import Head from '../components/head';
import PageHeading from '../components/page-heading';
import UsersList from '../components/users-list/users-list';

export default function Users() {
    const FAKE_USERS = [
        { name: 'admin', role: 'admin' },
        { name: 'rose', role: 'manager' },
        { name: 'alex', role: 'admin' }
    ]

    return (
        <div id="users-page">
            <Head title="Users" />
            <ExitIcon to="/" />
            <PageHeading>Users</PageHeading>
            <UsersList>{FAKE_USERS}</UsersList>
        </div>
    );
}
