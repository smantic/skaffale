import axios from 'axios'

export function getLibraries () {
    return axios.get("http://localhost:3000/libraries")
}

export function postNewLibrary (json) {
    return axios.post("http://localhost:3000/newLibrary", json)
}