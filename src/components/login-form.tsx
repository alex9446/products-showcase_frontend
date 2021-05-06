import React, { useState } from 'react';

import InputBox from './input-box';

export default function LoginForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.debug(`User: ${name} \nPassword: ${password}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputBox onChange={setName} type="text" placeholder="name" value={name} />
            <InputBox onChange={setPassword} type="password" placeholder="password" value={password} />
            <input type="submit" value="Submit" />
        </form>
    );
}
