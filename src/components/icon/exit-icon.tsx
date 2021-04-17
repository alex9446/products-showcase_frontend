import { mdiCloseThick } from '@mdi/js';
import React from 'react';

import LinkIcon from './link-icon';

interface PropsInterface {
    to: string
}

export default function ExitIcon(props: PropsInterface) {
    return (
        <LinkIcon
            to={props.to}
            path={mdiCloseThick}
            class="exit-icon corner-icon"
        />
    );
}
