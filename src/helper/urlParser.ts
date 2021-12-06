export const urlParser = (urlPath: string) => {
    const url = new URL(urlPath);
    return url.pathname.split('/')[3]
}