import axios from 'axios'

export function getLibraries () {
    return axios.get("http://api.skaffale.com/libraries")
}

export function postNewLibrary (json) {
    return axios.post("http://api.skaffale.com/newLibrary", json)
}