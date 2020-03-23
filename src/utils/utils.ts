import { CSSObject } from '@emotion/css';

export function noop(): void {
    //
}

export function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

export type ValueOf<T> = T[keyof T];
export type ExternalStyles<T> = Partial<{ [key in keyof T]: CSSObject }>;
// function foo<T extends IModel, K extends keyof T>(source: T, value: T[K], property: K) {
