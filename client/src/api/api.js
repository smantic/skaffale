import axios from 'axios'

export function getJsonList () {
    return axios.get("http://localhost:3000/libraries")
}