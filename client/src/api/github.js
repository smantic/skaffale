import axios from "axios"

export function getGithubRepoData(user, repo) {
    return axios.get(`https://api.github.com/repos/${user}/${repo}`)
}