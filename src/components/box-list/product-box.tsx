import React from 'react';

export interface ProductBoxInterface {
    image: string,
    name: string
}

export default function ProductBox(props: ProductBoxInterface) {
    return (
        <div className="product-box">
            <img src={props.image} />
            <div>{props.name}</div>
        </div>
    );
}
