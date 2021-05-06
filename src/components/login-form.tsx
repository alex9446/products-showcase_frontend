import React, { useState } from 'react';

import InputBox from './input-box';

export default function LoginForm() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.debug(`User: ${user} \nPassword: ${password}`);
    }

    return (
        <form>
            <InputBox onChange={setUser} type="text" placeholder="name" value={user} />
            <InputBox onChange={setPassword} type="password" placeholder="password" value={password} />
            <input onClick={handleSubmit} type="submit" value="Submit" />
        </form>
    );
}
