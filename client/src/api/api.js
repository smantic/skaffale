import axios from 'axios'

export function getJsonList () {
    axios.get("http://localhost:3000/getJsonList").then((res) => {
        console.log(res)
    })
}