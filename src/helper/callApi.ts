export const callApi = async <T>(url: string): Promise<T> => {
  return fetch(url).then(response => response.json().then(data => data as T))
}