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

interface objectWithPosition { position: number }
export function sortAscByPosition<T extends objectWithPosition>(list: T[]): T[] {
    return list.sort((a, b) => a.position - b.position);
}
export function sortDescByPosition<T extends objectWithPosition>(list: T[]): T[] {
    return list.sort((a, b) => b.position - a.position);
}

// Yes, i know, this is not a best practice, but as written in the README the project is for educational purposes
export function saveToken(token: string): void {
    localStorage.setItem('token', token);
}

export function getToken(): string {
    return localStorage.getItem('token') || '';
}
