import axios from 'axios'
const API_URL="https://conduit.productionready.io/api"

const request={
    get: (arg)=>(axios.get(`${API_URL}/${arg}`)),
    post: (resource,param)=>(axios.post(`${API_URL}/${resource}`,param))
}
const auth={
    current:()=>
        request.get('/user'),
    register:(username,email,password)=>
        request.post('users',{user:{username,email,password}}),
    login:(email,password)=>
        request.post('users/login',{user:{email,password}})    
}
const article={
    all:()=>
        request.get('/articles')
}
const setHeader=(token)=>{
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
}
const api={
    auth,
    setHeader,
    article
}
export default api