import React from 'react';

import Head from '../components/head';
import LoginForm from '../components/login-form';
import PageHeading from '../components/page-heading';

export default function Login() {
    return (
        <div id="login-page">
            <Head title="Login" />
            <PageHeading>Login</PageHeading>
            <LoginForm />
        </div>
    );
}
