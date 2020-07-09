import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import sessionReducer from "./sessionReducer";
import productReducer from "./productReducer";
import reviewReducer from "./reviewReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  session: sessionReducer,
  products: productReducer,
  reviews: reviewReducer,
});

export default rootReducer;
