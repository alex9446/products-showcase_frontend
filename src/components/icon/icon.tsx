import MDIcon from '@mdi/react';
import React from 'react';

export interface IconInterface {
    path: string,
    class: string,
    size?: string
}

export default function Icon(props: IconInterface) {
    return (
        <MDIcon
            path={props.path}
            className={props.class}
            size={props.size ? props.size : '1.5rem'}
        />
    );
}
