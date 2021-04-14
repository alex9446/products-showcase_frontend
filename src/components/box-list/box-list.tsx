import React from 'react';

import ProductBox, { ProductBoxInterface } from './product-box'

interface PropsInterface {
    children: ProductBoxInterface[]
}

export default function BoxList(props: PropsInterface) {
    return (
        <div className="box-list">
            {props.children.map(box => {
                return (
                    <ProductBox
                        image={box.image}
                        name={box.name}
                    />
                );
            })}
        </div>
    );
}
