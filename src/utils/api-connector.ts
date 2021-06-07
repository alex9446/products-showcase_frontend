interface optionsInterface {
    method: string,
    headers: {},
    body: string
}

function getFetchOptions(method: string, json: {}, token: string): optionsInterface {
    const post_or_patch = method === 'POST' || method === 'PATCH';
    const content_type_header = post_or_patch ? { 'Content-Type': 'application/json' } : {};
    const authorization_header = token ? { 'Authorization': `Bearer ${token}` } : {};
    return {
        method: method,
        headers: { ...content_type_header, ...authorization_header },
        body: post_or_patch ? JSON.stringify(json): null
    }
}

export default async function apiConnector<T>(endpoint: string, method='GET', json={}, token=''): Promise<T> {
    const cors_url = process.env.GATSBY_CORS_URL || '';
    const host = process.env.GATSBY_API_HOST || '';
    const protocol = process.env.GATSBY_API_PROTOCOL || (host === '' ? '' : 'https://');

    const url = cors_url + protocol + host + endpoint;
    const options = getFetchOptions(method, json, token);

    const response = await fetch(url, options);
    const response_json = await response.json();
    if (response_json.status === 'ok') return response_json;
    if (response_json.status === 'error') throw new Error(response_json.message);
    throw new Error(`Response status code: ${response.status}`);
}
