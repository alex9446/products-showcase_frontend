function getWithRegEx(regex: RegExp, text: string): string|null {
    const reParsed = regex.exec(text);
    if (reParsed && reParsed.length > 1) return reParsed[1];
    return null;
}

export function getProductIdFromSearch(search: string): string|null {
    return getWithRegEx(/\?product\=(\w+)/, search);
}

export function getUserIdFromSearch(search: string): string|null {
    return getWithRegEx(/\?user\=(\w+)/, search);
}
