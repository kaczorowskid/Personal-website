export const urlParser = (urlPath: string) => {
  try {
    const url: URL = new URL(urlPath);
    return url.pathname.split('/')[3]
  } catch(e) {
    console.log(e)
  }
}