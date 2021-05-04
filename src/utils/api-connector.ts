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
        body: post_or_patch ? JSON.stringify(json): ''
    }
}

export default function apiConnector(endpoint: string, method='GET', json={}): Promise<{}> {
  return new Promise((resolve, reject) => {
    const cors_url = process.env.GATSBY_USE_CORS === 'TRUE' ? 'https://cors-anywhere.herokuapp.com/' : '';
    const host = process.env.GATSBY_API_HOST || '';
    const protocol = process.env.GATSBY_API_PROTOCOL || (host === '' ? '' : 'https://');

    const url = cors_url + protocol + host + endpoint;
    const options = getFetchOptions(method, json);

    fetch(url, options).then(response => {
      response.json().then(response_json => {
        response_json.error ? reject(response_json.error) : resolve(response_json);
      }).catch(error => reject(error));
    }).catch(error => reject(error));
  });
}
