import {HttpRequestHub} from "../HttpRequestHub";

const BASE_URL = "/api/v1/user";
const BASE_URL_AUTH = "/api/v1/auth";
const BASE_URL_ADMIN = "/api/admin";

export const getStudents = (page=0,size=10) => {
    // axios.post("/auth",data)
    const config = {
        method: "GET",
        url:BASE_URL+"/?page="+page+"&size="+size
    }
    return HttpRequestHub(config);
};

export const register = (data)=>{
    const config = {
        method: "POST",
        url: BASE_URL_AUTH + "/register",
        data: data
    }
}
export const checkSock = ()=>{
    const config = {
        url: "/chat"
    }
    return HttpRequestHub(config);
}