import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import React from 'react';

import Icon from '../icon/icon';
import { Images } from '../box-list/product-box';

interface PropsInterface {
    children: Images[]
}

export default function ImageSlider(props: PropsInterface) {
    return (
        <div className="image-slider">
            <Icon path={mdiChevronLeft} class="arrow-left image-arrow" />
            <Icon path={mdiChevronRight} class="arrow-right image-arrow" />
            {props.children.map(image => <img key={image.position} src={image.base64_image} />)}
        </div>
    );
}
