import {HttpRequestHub} from "../HttpRequestHub";

const BASE_URL = "/api/file";
const BASE_URL_AUTH = "/api/auth";
const BASE_URL_ADMIN = "/api/admin";

export const getFiles = (page=0,size=10) => {
    // axios.post("/auth",data)
    const config = {
        method: "GET",
        url:BASE_URL+"/?page="+page+"&size="+size
    }
    return HttpRequestHub(config);
}
export const createFiles = (obj) => {
    // axios.post("/auth",data)
    const config = {
        method: "POST",
        url:BASE_URL +"/save",
        data: obj,
        "Content-Type":"multipart/form-data"
    }
    return HttpRequestHub(config);
}

export const deleteFiles = (id) => {
    // axios.post("/auth",data)
    const config = {
        method: "DELETE",
        url:BASE_URL+"/delete/"+id
    }
    return HttpRequestHub(config);
}
