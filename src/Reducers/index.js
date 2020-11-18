
import {combineReducers} from "redux";
import booksReducer from "./booksReducers";
import detailReducer from "./detailReducers";


const rootReducer = combineReducers({
    books : booksReducer,
    book : detailReducer,
});


export default rootReducer;