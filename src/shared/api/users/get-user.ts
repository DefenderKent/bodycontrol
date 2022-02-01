import { createEffect } from "effector";
import { axios } from "../base";
import { endpoints } from "../endpoints";
import {   GetUserPayload, GetUserResponse } from "./types";

export const getUser =(payload:GetUserPayload)=>{
    return axios.get<GetUserResponse>(endpoints.authorization.user, {params:payload});
}
export const getUserDataFx = createEffect(getUser);
