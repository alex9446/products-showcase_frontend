import React from 'react';

import BoxList from '../components/box-list/box-list';
import Head from '../components/head';
import PageHeading from '../components/page-heading';

export default function Index() {
    const PLACEHOLDER_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=='
    const FAKE_BOXES = [
        { image: PLACEHOLDER_IMAGE, name: 'Box One' },
        { image: PLACEHOLDER_IMAGE, name: 'Box Two' },
        { image: PLACEHOLDER_IMAGE, name: 'Box Three' },
    ]

    return (
        <div id="index-page">
            <Head />
            <PageHeading>Products Showcase</PageHeading>
            <BoxList>{FAKE_BOXES}</BoxList>
        </div>
    );
}
