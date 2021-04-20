import { Link } from 'gatsby';
import React from 'react';

export interface Images {
    base64_image: string,
    position: number
}

export interface ProductBoxInterface {
    id: string,
    images: Images[],
    name: string
}

export default function ProductBox(props: ProductBoxInterface) {
    const default_image = props.images.find(image => image.position === 0);

    return (
        <div className="product-box">
            <Link to={`/?product=${props.id}`}>
                <img src={default_image ? default_image.base64_image : ''} />
                <div>{props.name}</div>
            </Link>
        </div>
    );
}
