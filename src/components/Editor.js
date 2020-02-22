import React, { Component } from 'react'
import { UPDATE_FIELD_EDITOR,ADD_TAG,
    ARTICLE_SUBMITTED,REMOVE_TAG } from '../constants/actionTypes'
import {connect} from 'react-redux'
import api from '../services/api'

const mapStateToProps=(state)=>{
    return {
        ...state.editor
    }
}
const mapDispatchToProps=(dispatch)=>({
    onChangeField:(key,value)=>dispatch({type:UPDATE_FIELD_EDITOR,key,value}),
    onSubmit:(article)=>{
        let payload=api.article.create(article)
        dispatch({type:ARTICLE_SUBMITTED,payload})
    },
    onAddTag:(tagInput)=>dispatch({type:ADD_TAG,tagInput}),
    onRemoveTag:(tag)=>dispatch({type:REMOVE_TAG,tag})
})
export class Editor extends Component {
    constructor(props){
        super(props)
        this.onChangeTitle=(e)=>this.props.onChangeField('title',e.target.value)
        this.onChangeDescription=(e)=>this.props.onChangeField('description',e.target.value)
        this.onChangeBody=(e)=>this.props.onChangeField('body',e.target.value)
        this.onSubmit=(article)=>(e)=>{
            e.preventDefault()
            this.props.onSubmit(article)
        }
        this.onEnterTagInput=(e)=>{
            if(e.keyCode === 13){
                e.preventDefault()
                let tagInput=e.target.value
                if(!tagInput){return }
                this.props.onAddTag(tagInput)
                e.target.value=''
            }
        }
        this.onRemoveTag=(tag)=>(e)=>{
            e.preventDefault()
            this.props.onRemoveTag(tag)
        }
        this.onKeyPress=(e)=>{
            if(e.which===13){
                e.preventDefault()
            }
        }
    }
    render() {
        let title=this.props.title
        let description= this.props.description
        let body=this.props.body
        let tagList=this.props.tagList
        let article={title,description,body,tagList}
        return (
            <div className="container" onKeyPress={this.onKeyPress}>
                <form className="p-sm-5">
                    <input type="text" className="form-control mb-2" onChange={this.onChangeTitle}
                    placeholder="Article Title"/>
                    <input type="text" className="form-control mb-2" onChange={this.onChangeDescription}
                    placeholder="What's this article about"/>
                    <textarea className="form-control mb-2" name="" id="" cols="30" rows="5" 
                    placeholder="content" onChange={this.onChangeBody}></textarea>
                    <input type="text" className="form-control mb-2" 
                    placeholder="Tags" onKeyUp={this.onEnterTagInput}/>
                    <button className="btn btn-primary float-right" 
                    onClick={this.onSubmit(article)} disabled={this.props.inProgress}>Publish Article</button>
                    <div className="tagList">
                    {
                        tagList.map((tag)=>{
                            return <div className="tag">
                                {tag}
                                <div className="close" onClick={this.onRemoveTag(tag)}><span>&times;</span></div>
                            </div>
                        })
                    }
                </div>
                </form>
                
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Editor)
