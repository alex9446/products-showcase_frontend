import React from 'react';

export default function LoginForm() {
    return (
        <form>
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="submit" value="Submit" />
        </form>
    );
}
