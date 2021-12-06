export const urlParser = (urlPath: string) => {
    const url: URL = new URL(urlPath);
    return url.pathname.split('/')[3]
}