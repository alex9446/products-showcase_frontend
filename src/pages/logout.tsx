import { navigate } from 'gatsby';
import React, { useEffect } from 'react';

import { deleteToken } from '../utils/auth';

export default function Logout() {
    useEffect(() => {
        deleteToken();
        navigate('/');
    }, []);

    return (
        <div id="logout-page">
            If you see this message, something went wrong!
        </div>
    );
}
