const BASE_URL = "http://localhost:3001";

function fetchRequest (path:string) {
  return fetch(BASE_URL + path)
    .then(result => result.status < 400 ? result : Promise.reject())
    .then(result => result.status === 204 ? result : result.json())
    .catch(error => {
      console.error('Error: ', error);
    })
}

function getSnapshots() {
  return fetchRequest('/snapshots');
}

const ApiService = {
  getSnapshots
}

export default ApiService;