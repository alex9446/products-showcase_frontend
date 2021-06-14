import React, { useEffect, useState } from 'react';
import { PageProps } from 'gatsby';

import ExitIcon from '../components/icon/exit-icon';
import { FAKE_USERS } from '../utils/fake-data';
import { getUserIdFromSearch } from '../utils/mixed';
import Head from '../components/head';
import PageHeading from '../components/page-heading';
import UsersList from '../components/users-list/users-list';
import UserModal from '../components/user-modal';
import { getUsers } from '../utils/users';

export default function Users(props: PageProps) {
    const [users, setUsers] = useState(FAKE_USERS);

    useEffect(() => {
        getUsers().then(users => {
            console.log(users);
            setUsers(users);
        });
    }, []);

    const searchedUserId = getUserIdFromSearch(props.location.search);
    const selectedUser = users.find(user => user.id === searchedUserId);

    return (
        <>
            <div id="users-page">
                <Head title="Users" />
                <ExitIcon to="/" />
                <PageHeading>Users</PageHeading>
                <UsersList>{users}</UsersList>
            </div>
            {selectedUser && <UserModal>{selectedUser}</UserModal>}
        </>
    );
}
