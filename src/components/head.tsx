import React from 'react';
import { Helmet } from 'react-helmet';

interface PropsInterface {
    lang: string,
    title: string
}

export default function Head(props: PropsInterface) {
    return (
        <Helmet>
            <html lang={props.lang ? props.lang : 'en'} />
            <title>
                {props.title ? props.title + ' - ' : ''}Products showcase
            </title>
            {/* <link rel="icon" href={favicon} type="image/svg+xml" />
            <meta name="description" content="A simple client service for saving and managing messages.
                                              It connect to the server service with REST API." /> */}
        </Helmet>
    );
}
