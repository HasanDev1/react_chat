import {accessToken} from "../constants";

export const setCookie = (token) => {localStorage.setItem(accessToken, token)}
export const getCookie = () => localStorage.getItem(accessToken)
export const deleteCookie = () => {localStorage.removeItem(accessToken)}