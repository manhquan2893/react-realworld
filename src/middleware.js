import {ASYNC_START} from './constants/actionTypes'

export const promiseMiddleware= store=> next=>action=>{
    if(isPromise(action.payload)){
        store.dispatch({type:ASYNC_START,subType:action.type})
        action.payload.then((res)=>{
            if(res.constructor === Array){
                console.log(res)
                action.payload=res
                console.log(action)
                next(action)
            }
            action.payload=res.data
            next(action)
        })
        .catch(({response})=>{
            action.payload=response.data
            action.error=true
            next(action);
        })
        return
    }
    next(action)
}

export const localStorageMiddleware= store => next =>action=>{
    if(action.type==='LOGIN' || action.type === 'REGISTER'){
        if(action.payload.user){
            localStorage.setItem('jwt',action.payload.user.token)
        }
    }
    next(action)
}
function isPromise(payload){
    return payload && typeof payload.then==='function'
}