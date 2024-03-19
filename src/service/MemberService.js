import { memberApi } from "../axios/api";

import { AuthHeader } from "./Cookie";

const userHeaders = AuthHeader();

export const memberLogin = async (user) => await memberApi.post('',user);

export const emailDuplicateCheck = async (email) => await memberApi.get(``);

export const registerMember = async (user) => await memberApi.post('',user);
