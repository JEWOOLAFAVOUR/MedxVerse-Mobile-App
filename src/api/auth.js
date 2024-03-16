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
    const response = await makeApiRequest('POST', '/auth/register', data);
    return response;
};

export const loginUser = async (data) => {
    console.log('lll', data)
    const response = await makeApiRequest('POST', '/auth/login', data);
    return response;
};

export const verifyEmail = async (data) => {
    console.log('lll', data)
    const response = await makeApiRequest('POST', '/auth/verify-email-account', data);
    return response;
};

export const requestEmail = async (data) => {
    console.log('lll', data)
    const response = await makeApiRequest('POST', '/auth/request-email-verification', data);
    return response;
};

export const forgetPassword = async (data) => {
    console.log('lll', data)
    const response = await makeApiRequest('POST', '/auth/request-reset-password', data);
    return response;
};