import React from 'react'
import {connect} from 'react-redux'
import ArticleList from './ArticleList'
import {CHANGE_TAB} from '../../constants/actionTypes'
import api from '../../services/api'

const mapStateToProps=(state)=>{
    return {
        ...state.home,
        token:state.auth.token,
        currentUser:state.auth.currentUser
    }
}
const mapDispatchToProps=(dispatch)=>({
    onTabClick: (tab,payload)=>{
        dispatch({type:CHANGE_TAB,tab,payload})}
})
const Tabs= (props)=>{
    let token= props.token
    let yourFeedsClickHandler= (e)=>{
        e.preventDefault()
        let payload=api.article.yours(props.currentUser.username,1)
        props.onTabClick('yourFeeds',payload)
    }
    let gloalFeedsClickHandler = (e)=>{
        e.preventDefault()
        let payload=api.article.all(1)
        props.onTabClick('globalFeeds',payload)
    }
    return (<ul className="nav nav-tabs feeds">
        {token?(
            <li className="nav-item">
                <a className={props.tab==="yourFeeds" ? 'nav-link active' : 'nav-link'} 
                href="" onClick={yourFeedsClickHandler}>Your Feed
                </a>
            </li>
        ):null}
        <li className="nav-item">
            <a className={props.tab==="globalFeeds" ? 'nav-link active' : 'nav-link'} 
            href="" onClick={gloalFeedsClickHandler}>Global Feed</a>
        </li>
    </ul>)
}
const MainView = (props)=>{
    return (
        <div>
            <Tabs token={props.token} tab={props.tab} 
            onTabClick={props.onTabClick} currentUser={props.currentUser}/>
            <ArticleList articles={props.articles}
            currentPage={props.currentPage}
            articlesCount={props.articlesCount}
            tab={props.tab}
            token={props.token}
            />
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(MainView)

