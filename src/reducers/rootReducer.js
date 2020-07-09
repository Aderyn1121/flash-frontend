import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import sessionReducer from "./sessionReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    modal: modalReducer,
    session: sessionReducer,
    product: productReducer,
});

export default rootReducer;
