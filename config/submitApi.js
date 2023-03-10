const submitApi = (url, method, data) => {

    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: !data ? null : JSON.stringify(data)
    };

    return fetch(`http://localhost:3000/api/${url}`, options)
        .then(response => response.json())
        .then(response => {
            if(response?.error) {
                throw new Error(response.error);
            }

            return response.data;
        })
        .catch(error => {
            throw new Error(error.message);
        });
}

export default submitApi;