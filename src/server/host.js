import axios from 'axios';

import { getCookie } from "../utils/index";
import { accessToken } from "../constants";

export const token = getCookie(accessToken);

export let host = "http://localhost";
export let port = '8085';

export let headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': token ?`Bearer ${token}`:''
};

export let axiosInstance = axios.create({
    baseURL: `${host}:${port}`,
    headers,
    timeout: 86400
});