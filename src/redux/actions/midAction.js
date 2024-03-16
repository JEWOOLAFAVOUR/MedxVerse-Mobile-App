import { UPDATE_USER_AUTH_DETAILS } from "../constants/constants"

export const updateUserAuthDetails = (userAuth) => {
    return {
        type: UPDATE_USER_AUTH_DETAILS,
        userAuth,
    }
}