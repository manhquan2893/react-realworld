import {PROFILE_LOADED} from '../constants/actionTypes'
export default (state={},action)=>{
    switch(action.type){
        case PROFILE_LOADED:
            return {
                ...action.payload.profile
            }
        default :
            return state
    }
}