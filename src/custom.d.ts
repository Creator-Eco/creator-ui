declare module '*.svg' {
    const content: React.FC;
    export default content;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export = value;
}