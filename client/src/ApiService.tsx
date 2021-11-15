const BASE_URL = "http://localhost:3001";

function fetchRequest (path:string, options?:any) {
  return fetch(BASE_URL + path, options)
    .then(result => result.status < 400 ? result : Promise.reject())
    .then(result => result.status === 204 ? result : result.json())
    .catch(error => {
      console.error('Error: ', error);
    })
}

function getSnapshots() {
  return fetchRequest('/snapshots');
}

function getUsers() {
  return fetchRequest('/users');
}

function getUserById (id:number) {
  return fetchRequest('/user/' + id)
}

function getUserClassesById(id:number) {
  return fetchRequest('/classes/' + id)
}

function createUser(body:{username:string, password_hash:string}) {
  console.log("inside apiservice")
  return fetchRequest('/users', {
    method: "POST",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
}

const ApiService = {
  getSnapshots,
  getUsers,
  createUser,
  getUserById,
  getUserClassesById
}

export default ApiService;