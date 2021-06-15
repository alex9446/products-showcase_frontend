import React, { MouseEventHandler } from 'react';

import Icon, { IconInterface } from './icon';

interface ClickIconInterface extends IconInterface {
    onClick: MouseEventHandler<HTMLDivElement>
}

export default function ClickIcon(props: ClickIconInterface) {
    return (
        <div onClick={props.onClick}>
            <Icon path={props.path} class={props.class} />
        </div>
    );
}
