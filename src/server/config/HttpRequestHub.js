import {axiosInstance as axios} from "../host";

export const HttpRequestHub = (config = null) => {
    return axios(config).then(res => {
        return res
    }).catch(
        err => null
    )
}
