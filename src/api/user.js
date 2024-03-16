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
        return response.data;
    } catch (error) {
        const { response } = error;
        if (response?.data) {
            return response.data;
        }
        return { error: error.message || error };
    }
};


export const fetchUserBalance = async () => {
    const response = await makeApiRequest('GET', '/wallet/me');
    return response;
};

export const fetchUserProfile = async () => {
    const response = await makeApiRequest('GET', '/user');
    return response;
};