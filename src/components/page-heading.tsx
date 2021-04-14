import React from 'react';

interface PropsInterface {
    children: string
}

export default function PageHeading(props: PropsInterface) {
    return <h1 className="page-heading">{props.children}</h1>;
}
