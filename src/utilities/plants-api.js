import sendRequest from './send-request';

const BASE_URL = '/api/plants';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function add(plantData) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(plantData)
    }).then(res => res.json());
}

// export function add(plantData) {
//     return sendRequest(`${BASE_URL}/${plantData}`);
// }

export function update(plant) {
    return fetch(`${BASE_URL}/${plant._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(plant)
    }).then(res => res.json());
}

// Should argument passed in be plant (for plant._id) or plantId ????
export function deleteOne(plant) {
    return fetch(`${BASE_URL}/${plant._id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}