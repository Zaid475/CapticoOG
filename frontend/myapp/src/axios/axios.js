import axios from "axios";

let BACKENDURL="http://localhost:8000/api/v1"

const api=axios.create(
    {
        baseURL:BACKENDURL,
        withCredentials:true
    }
)
export default api;