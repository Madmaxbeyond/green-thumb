import sendRequest from './send-request';

const BASE_URL = '/api/plants';

export function getOne(plant) {
    return sendRequest(`${BASE_URL}/${plant._id}`);
}

export function getAll(user) {
    return sendRequest(BASE_URL);
}

export function add(plantData) {
    return sendRequest(BASE_URL, 'POST', plantData);
}

export function updateWatered(plant) {
    return sendRequest(`${BASE_URL}/confirm-water/${plant._id}`, 'PUT', plant);
}

export function update(plant) {
    return sendRequest(`${BASE_URL}/edit/${plant._id}`, 'PUT', plant);
}

export function deleteOne(plantId) {
    return fetch(`${BASE_URL}/${plantId}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

// export function deleteOne(plantId) {
//     return sendRequest(`${BASE_URL}/${plantId}`, 'DELETE');
// }