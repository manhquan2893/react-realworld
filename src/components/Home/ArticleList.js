import React from 'react'
import Article from './Article'
import ListPagination from '../ListPagination'
import {SET_PAGE} from '../../constants/actionTypes'
import {connect} from 'react-redux'
import api from '../../services/api'

const mapDispatchToProps = (dispatch)=>({
    onSetPage:(page)=>{
        let payload= api.article.all(page)
        dispatch({type:SET_PAGE,page,payload})
    }
})
const ArticleList= props =>{
    if(!props.articles){
        return <div>Loading articles....</div>
    }
    if(props.articles.length===0){
        return <h5 style={{padding:'16px'}}>No Articles here</h5>
    }
    return <div>
        <div>
        {
            props.articles.map((article)=>{
                return <Article article={article}/>
            })
        }
        </div>
        <ListPagination currentPage={props.currentPage}
            articlesCount={props.articlesCount}
            onSetPage={props.onSetPage}
        />
    </div>
}

export default connect(null,mapDispatchToProps)(ArticleList)
