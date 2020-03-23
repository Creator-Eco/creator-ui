export const colors = {
    primary: '#000000',
    grey: '#92979e',
    battleshipGrey: '#6e7988',
    slateGrey: '#58616d',
    silver: '#d7d9dc',
    silver2: '#e0e2e6',
    paleGrey: '#edeff2',
    white: '#ffffff',
    white2: '#f1f1f1',
    red: '#ea4e4e',
    green: '#60be52'
};

export function getColor(name: keyof typeof colors): string {
    return colors[name];
}
