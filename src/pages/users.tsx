import React from 'react';

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
            <PageHeading>Users</PageHeading>
            <UsersList>{FAKE_USERS}</UsersList>
        </div>
    );
}
