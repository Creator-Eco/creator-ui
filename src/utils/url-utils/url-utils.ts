export function getQueryParam(name: string): string {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.hash);
    return results === null ? '' : window.decodeURIComponent(results[0].replace(/\+/g, ' '));
}

export function getHashUrlQueryParams(): {} {
    const hash = window.location.hash.substr(1);
    const query = hash.substring(hash.indexOf('?') + 1);
    if (!query) return {};
    const result = query.split('&').reduce((result, item) => {
        result[item.split('=')[0]] = item.substring(item.indexOf('=') + 1);;
        return result;
    }, {});

    return result;
}

export function getHashUrlQueryParam(name: string): string {
    const params = getHashUrlQueryParams();
    if (!params[name]) return '';
    return decodeURIComponent(params[name]);
}

export function getHashUrlPath(): string {
    return location.href.split('#')[1] || '/';
}

export function removeQueryParam(url: string, param: string): string {
    const urlparts = url.split('?');
    if (urlparts.length >= 2) {

        const prefix = encodeURIComponent(param) + '=';
        const pars = urlparts[1].split(/[&;]/g);

        //reverse iteration as may be destructive
        for (let i = pars.length; i-- > 0;) {
            //idiom for string.startsWith
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }

        return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
    }
    return url;
}

export function removeQueryParamFromUrl(param: string): void {
    const newUrl = removeQueryParam(window.location.href, param);
    window.history.replaceState({}, document.title, newUrl);
}
