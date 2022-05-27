import {HttpRequestHub} from "../HttpRequestHub";

const BASE_URL = "/api/user";
const BASE_URL_AUTH = "/api/auth";
const BASE_URL_ADMIN = "/api/admin";

export const getGroups = (page=0,size=10) => {
    // axios.post("/auth",data)
    const config = {
        method: "GET",
        url:BASE_URL_ADMIN+"/group/?page="+page+"&size="+size
    }
    return HttpRequestHub(config);
}
export const createGroups = (obj) => {
    // axios.post("/auth",data)
    const config = {
        method: "POST",
        url:BASE_URL_ADMIN +"/group/",
        data: obj
    }
    return HttpRequestHub(config);
}
// export const updateGroups = (id,obj) => {
//     const config = {
//         method: "PUT",
//         url:BASE_URL_ADMIN +"/user/"+id,
//         data: obj
//     }
//     return HttpRequestHub(config);
// }
// export const deleteGroups = (id) => {
//     // axios.post("/auth",data)
//     const config = {
//         method: "DELETE",
//         url:BASE_URL+"/"+id
//     }
//     return HttpRequestHub(config);
// }
