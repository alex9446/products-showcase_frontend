import { Link } from 'gatsby';
import React from 'react';

interface Images {
    base64_image: string,
    position: number
}

export interface ProductBoxInterface {
    id: string,
    images: Images[],
    name: string
}

export default function ProductBox(props: ProductBoxInterface) {
    return (
        <div className="product-box">
            <Link to={`/?product=${props.id}`}>
                <img src={props.images[0].base64_image} />
                <div>{props.name}</div>
            </Link>
        </div>
    );
}
