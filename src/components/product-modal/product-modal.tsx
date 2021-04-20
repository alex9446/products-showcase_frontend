import React from 'react';

import ExitIcon from '../icon/exit-icon';
import ImageSlider from './image-slider';
import { ProductBoxInterface } from '../box-list/product-box';

interface ProductInterface extends ProductBoxInterface {
    price: number,
    description: string,
    sku: string
}

interface PropsInterface {
    children: ProductInterface
}

export default function ProductModal(props: PropsInterface) {
    const product = props.children;
    const sortedImages = product.images.sort((a, b) => a.position - b.position);

    return (
        <div className="product-modal">
            <ExitIcon to="/" />
            <ImageSlider>{sortedImages}</ImageSlider>
            <div className="price-box">
                <div className="standard-price">{product.price}€</div>
            </div>
            <div className="title">{product.name}</div>
            <p className="description">{product.description}</p>
            <div className="sku">{product.sku}</div>
        </div>
    );
}
