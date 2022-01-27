import { axios } from "../base";
import { endpoints } from "../endpoints";
import {  AuthResponse, GetUsersPayload } from "./types";

export const getUsers =(payload:GetUsersPayload)=>{
    return axios.get<AuthResponse>(endpoints.authorization.auth, {params:payload});
}