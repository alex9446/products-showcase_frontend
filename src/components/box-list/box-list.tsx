import React from 'react';

import ProductBox, { ProductBoxInterface } from './product-box';

interface PropsInterface {
    children: ProductBoxInterface[]
}

export default function BoxList(props: PropsInterface) {
    return (
        <div className="box-list">
            {props.children.map(box => <ProductBox key={box.id} id={box.id} images={box.images} name={box.name} />)}
        </div>
    );
}
