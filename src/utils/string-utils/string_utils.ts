export function camelcaseToDash(string: string): string {
    return string
        .replace(/\W+/g, '-')
        .replace(/([a-z\d])([A-Z])/g, '$1-$2')
        .toLowerCase();
}

export function countWords(string: string): number {
    return string.split(' ').length;
}

export function stringHasDuplicateWord(string: string): boolean {
    return /\b(\w+)\b.*\b\1\b/g.test(string);
}

export function getLastChars(string: string, digits: number): string {
    const length = string.length;
    return string.substring(length - digits, length);
}

export function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function camelcaseToUnderscore(string: string): string {
    return string
        .replace(/\W+/g, '-')
        .replace(/([a-z\d])([A-Z])/g, '$1_$2')
        .toUpperCase();
}

export function toCamelCase(string: string): string {
    return string.replace(/\W+(.)/g, (y, x) => x.toUpperCase());
}

export function toPascalCase(string: string): string {
    return string.replace(/\w+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase());
}

export function isStringJson(string: string): boolean {
    let parsedStr = string;
    try {
        parsedStr = JSON.parse(string);
    } catch (e) {
        return false;
    }
    return typeof parsedStr == 'object';
}

export function cbExtractNumbersFromString(string: string): string {
    const match = string.match(/\d+/g);
    if (!match) return '';

    return match.join('');
}
