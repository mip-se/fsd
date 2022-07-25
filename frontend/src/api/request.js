export const getDefaultRequestConfig = () => {
    const myHeaders = new Headers();

    myHeaders.append("Authorization", "mysecretkey");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    }

    return requestOptions;
}

export const getMetrics = () => {
    const config = getDefaultRequestConfig();
    return fetch('http://localhost:3000/metrics', config).then((res) => {
        if(!res.ok) {
            throw res;
        }

        return res.text();
    })
}

export const getTime = () => {
    const config = getDefaultRequestConfig();
    return fetch('http://localhost:3000/time', config).then((res) => {
        if(!res.ok) {
            throw res;
        }

        return res.json();
    })
}
