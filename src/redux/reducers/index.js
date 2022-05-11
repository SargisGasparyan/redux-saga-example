import { combineReducers } from "redux";
import Counter from "./counter";
import News from "./news";
import Errors from "./errors";


const reducer = combineReducers({
    Counter,
    News,
    Errors
})


export default reducer