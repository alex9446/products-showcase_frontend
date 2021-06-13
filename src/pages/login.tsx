import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

import ExitIcon from '../components/icon/exit-icon';
import Head from '../components/head';
import LoginForm from '../components/login-form';
import PageHeading from '../components/page-heading';
import { checkLogin } from '../utils/auth';
import { consoleLogError } from '../utils/mixed';

export default function Login() {
    const [logged, setLogged] = useState(false);
    // Check if the user is correctly logged
    useEffect(() => {
        checkLogin()
        .then(() => setLogged(true))
        .catch(consoleLogError);
    }, []);

    return (
        <div id="login-page">
            <Head title="Login" />
            <ExitIcon to="/" />
            <PageHeading>Login</PageHeading>
            <LoginForm />
            {logged && <div className="already-logged">Already correctly logged, return to <Link to="/">home</Link>.</div>}
        </div>
    );
}
