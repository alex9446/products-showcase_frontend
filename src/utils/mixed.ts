export function getProductIdFromSearch(search: string): string|null {
    const reProduct = /\?product\=(\w+)/;
    const reParsed = reProduct.exec(search);
    if (reParsed && reParsed.length > 1) return reParsed[1];
    return null;
}
