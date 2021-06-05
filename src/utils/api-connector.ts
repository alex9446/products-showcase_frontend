interface optionsInterface {
    method: string,
    headers: {},
    body: string
}

function getFetchOptions(method: string, json: {}): optionsInterface {
    const post_or_patch = method === 'POST' || method === 'PATCH';
    return {
        method: method,
        headers: post_or_patch ? { 'Content-Type': 'application/json' } : {},
        body: post_or_patch ? JSON.stringify(json): null
    }
}

export default async function apiConnector<T>(endpoint: string, method='GET', json={}): Promise<T> {
    const cors_url = process.env.GATSBY_CORS_URL || '';
    const host = process.env.GATSBY_API_HOST || '';
    const protocol = process.env.GATSBY_API_PROTOCOL || (host === '' ? '' : 'https://');

    const url = cors_url + protocol + host + endpoint;
    const options = getFetchOptions(method, json);

    const response = await fetch(url, options);
    const response_json = await response.json();
    if (response_json.status === 'ok') return response_json;
    if (response_json.status === 'error') throw new Error(response_json.message);
    throw new Error(`Response status code: ${response.status}`);
}
