import {axiosInstance as axios} from "../../host";
import {HttpRequestHub} from "../HttpRequestHub";

const BASE_URL = "/api/v1/auth";
const BASE_URL2 = "/api/v1/user";

export const auth = (data) => {
    // axios.post("/auth",data)
    const config = {
        method: "POST",
        url:BASE_URL+"/login",
        data: data
    }
    return HttpRequestHub(config);
}
export const me = () => {
    // axios.post("/auth",data)
    const config = {
        method: "GET",
        url:BASE_URL+"/me"
    }
    return HttpRequestHub(config);
}
