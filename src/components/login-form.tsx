import { navigate } from 'gatsby';
import React, { useState } from 'react';

import apiConnector from '../utils/api-connector';
import InputBox from './input-box';
import { saveToken } from '../utils/mixed';

export default function LoginForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const loginData = { name: name, password: password };
        apiConnector<{token: string}>('/login', 'POST', loginData)
        .then(response => {
            saveToken(response.token);
            navigate('/');
        })
        .catch(error => console.error(error.toString()));
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputBox onChange={setName} type="text" placeholder="name" value={name} />
            <InputBox onChange={setPassword} type="password" placeholder="password" value={password} />
            <input type="submit" value="Submit" />
        </form>
    );
}
