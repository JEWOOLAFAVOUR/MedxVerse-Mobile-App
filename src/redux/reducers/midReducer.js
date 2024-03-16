import { UPDATE_USER_AUTH_DETAILS } from "../constants/constants";


const initialState = {
    userAuth: {},
}



const midReducer = (state = initialState, action) => {
    const { type, userAuth } = action;

    switch (type) {
        case UPDATE_USER_AUTH_DETAILS:
            return {
                ...state,
                userAuth: {
                    ...state.userAuth,
                    ...userAuth,
                }
            };
        default:
            return state;
    }
};

export default midReducer;