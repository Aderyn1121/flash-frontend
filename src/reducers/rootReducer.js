import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import sessionReducer from "./sessionReducer";
import productReducer from "./productReducer";
import transactionReducer from "./transactionReducer";

const rootReducer = combineReducers({
    modal: modalReducer,
    session: sessionReducer,
    products: productReducer,
    transactions: transactionReducer,
});

export default rootReducer;
