import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import { itemReducer } from "./Reducers";

const Store = createStore(
    itemReducer,
    applyMiddleware(thunk)
);

export default Store;