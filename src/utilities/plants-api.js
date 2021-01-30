import sendRequest from './send-request';

const BASE_URL = '/api/plants';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(plantData) {
    return sendRequest(BASE_URL, 'POST', plantData);
}

export function update(plant) {
    return sendRequest(`${BASE_URL}/edit/${plant._id}`, 'PUT', plant);
}

export function deleteOne(plant) {
    return fetch(`${BASE_URL}/${plant._id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

// export function deleteOne(plant) {
//     return sendRequest(`${BASE_URL}/delete/${plant._id}`, 'DELETE', plant);
// }