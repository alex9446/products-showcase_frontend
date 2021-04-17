import { Link } from 'gatsby';
import React from 'react';

import Icon, { IconInterface } from './icon';

interface LinkIconInterface extends IconInterface {
    to: string
}

export default function LinkIcon(props: LinkIconInterface) {
    return (
        <Link to={props.to}>
            <Icon path={props.path} class={props.class} />
        </Link>
    );
}
