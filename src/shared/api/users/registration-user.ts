import { axios } from "../base";
import { endpoints } from "../endpoints";
import { AuthPayload, AuthResponse } from "./types";

export const registration =(payload:AuthPayload)=>{
    return axios.post<AuthResponse>(endpoints.authorization.auth, payload);
}