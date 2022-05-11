import { SET_POPULAR_NEWS_ERROR,SET_LATEST_NEWS_ERROR } from "../constants";

const initialState={
    latestNewsError:"",
    popularNewsError:""
}

const Errors = (state=initialState,{type,payload})=>{
    switch(type){
        case SET_LATEST_NEWS_ERROR:
            return {
                ...state,
                latestNewsError:payload
            }
        case SET_POPULAR_NEWS_ERROR:
            return {
                ...state,
                popularNewsError:payload
            }    
        default:
            return state   
    }
}
export default Errors
