
export const promiseMiddleware= store=> next=>action=>{
    if(isPromise(action.payload)){
        action.payload.then((res)=>{
            action.payload=res.data
            console.log(action)
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