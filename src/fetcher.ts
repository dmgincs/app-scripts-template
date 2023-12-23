const API_URL = 'https://api.dmginc.gg/v3/';
const API_KEY = undefined; // Fill this in with '<your api key>' if you have any

function typedFetch<T>(path: string, params: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {}): T {
    const data = UrlFetchApp.fetch(`${API_URL}${path}`, {
        ...params,
        headers: API_KEY ? {
            ApiKey: API_KEY,
            ...params.headers
        } : params.headers
    }).getContentText();
    try {
        return JSON.parse(data) as T;
    } catch (e) {
        const message = `Server response not in JSON format:\n${data}`;
        // eslint-disable-next-line no-console
        console.error(message);
        throw new Error(message);
    }
}