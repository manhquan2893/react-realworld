import {HOME_PAGE_LOADED, CHANGE_TAB,SET_PAGE} from '../constants/actionTypes'

export default (state={currentPage:1},action)=>{
    switch(action.type){
        case HOME_PAGE_LOADED:
            return {
                ...state,
                articles:action.payload.articles,
                articlesCount:action.payload.articlesCount/5,
                tab:'globalFeeds'
            }
        case CHANGE_TAB:
            let articles=action.payload.articles
            if(action.tab==='yourFeeds'){
                articles=articles.filter((article)=>{
                    return article.author.username===action.currentUsername
                })
            }
            return {
                ...state,
                articles,
                articlesCount:action.payload.articlesCount/5,
                tab:action.tab
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage:action.page,
                articles:action.payload.articles
            }
        default :
            return state
    }
}