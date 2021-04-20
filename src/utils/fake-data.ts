const PLACEHOLDER_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg==';
export const FAKE_BOXES = [
    {
        id: 'a123',
        name: 'TEST',
        price: 5.99,
        description: '1 - Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua',
        sku: 'test-s01',
        images: [
            {
                base64_image: PLACEHOLDER_IMAGE,
                position: 1
            },
            {
                base64_image: PLACEHOLDER_IMAGE,
                position: 0
            }
        ]
    },
    {
        id: 'b',
        name: 'TEST',
        price: 9.99,
        description: '2 - Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua',
        sku: 'test-s02',
        images: [
            {
                base64_image: PLACEHOLDER_IMAGE,
                position: 0
            }
        ]
    },
    {
        id: 'c',
        name: 'TEST',
        price: 19.99,
        description: '3 - Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua',
        sku: 'test-s03',
        images: [
            {
                base64_image: PLACEHOLDER_IMAGE,
                position: 0
            }
        ]
    }
];
