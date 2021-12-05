export const callApi = async (url: string) => {
    let response: any, error: any
    response = fetch(url)
        .then(res => res.json())
        .catch(err => {
            error = err
        })

    return { response, error }
}