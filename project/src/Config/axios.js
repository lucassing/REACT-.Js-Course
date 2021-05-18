import axios from "axios"
import {endpoint} from "./config.js"

const instance = axios.create({
    baseURL:endpoint
})

export default instance
