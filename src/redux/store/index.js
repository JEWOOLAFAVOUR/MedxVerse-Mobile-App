import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

// let middleware = [thunk, checkTokenExpiration];
let middleware = [thunk];

const handleToken = (store) => {
    const userState = store.getState().auth?.token
    console.log('user token .....', userState)
}


const reduxStore = createStore(
    rootReducer,
    compose(
        // applyMiddleware(...middleware),
    )
);


reduxStore.subscribe(() => handleToken(reduxStore));

export default reduxStore;
