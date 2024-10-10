import axios from "axios";
import reduxStore from "../redux/store";
import client from "./client";

const makeApiRequest = async (method, endpoint, data) => {
    try {
        const response = await client.request({
            method,
            url: endpoint,
            data // add the data parameter to the request options
        });
        return { data: response.data, status: response.status };
    } catch (error) {
        const { response } = error;
        if (response?.data) {
            return { data: response.data, status: response.status };
        }
        return { error: error.message || error };
    }
};


export const registerUser = async (data) => {
    const response = await makeApiRequest('POST', '/user/register', data);
    return response;
};

export const loginUser = async (data) => {
    const response = await makeApiRequest('POST', '/user/login', data);
    return response;
};

export const verifyEmail = async (data) => {
    const response = await makeApiRequest('POST', '/user/verify', data);
    return response;
};

export const resendOtp = async (data) => {
    const response = await makeApiRequest('POST', '/user/resend', data);
    return response;
};

export const forgetPassword = async (data) => {
    const response = await makeApiRequest('POST', '/user/forgot', data);
    return response;
};

export const resetPassword = async (data) => {
    const response = await makeApiRequest('POST', '/user/reset', data);
    return response;
};

export const getProfile = async (data) => {
    const response = await makeApiRequest('GET', '/user/profile', data);
    return response;
};

export const editProfile = async (data) => {
    const response = await makeApiRequest('PUT', '/user/profile', data);
    return response;
};