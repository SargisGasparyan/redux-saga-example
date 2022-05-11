import { INCREASE_COUNT,DECREASE_COUNT } from "../constants"
const Counter= (state={count:0},{type})=>{
    switch(type){
        case INCREASE_COUNT:
            return {...state,count:state.count+1}
            break
        case DECREASE_COUNT:
            return {...state,count:state.count-1}
            break 
        default:
            return state   
    }
}
export default Counter
