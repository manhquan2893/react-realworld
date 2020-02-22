import {UPDATE_FIELD_EDITOR,ADD_TAG,
    ARTICLE_SUBMITTED, ASYNC_START,REMOVE_TAG} from '../constants/actionTypes'

export default (state={tagList:[]},action)=>{
    switch(action.type){
        case UPDATE_FIELD_EDITOR:
            return {
                ...state,
                [action.key]:action.value
            }
        case ADD_TAG:
            return {
                ...state,
                tagList:state.tagList.concat([action.tagInput])
            }
        case ARTICLE_SUBMITTED:
            return {
                ...state,
                inProgress:false
            }
        case ASYNC_START:
            if (action.subType === ARTICLE_SUBMITTED) {
                return { ...state, inProgress: true };
              }
            break;
        case REMOVE_TAG:
            return {
                ...state,
                tagList:state.tagList.filter(tag=>tag !== action.tag)
            }
        default :
            return state
    }
    return state;
}