import React from 'react';

import ExitIcon from './icon/exit-icon';

interface PropsInterface {
    id: string
}

export default function Product(props: PropsInterface) {
    return (
        <div className="product-modal">
            <ExitIcon to="/" />
            <p>{props.id}</p>
        </div>
    );
}
