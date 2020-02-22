import React, { Component } from 'react'
import api from '../services/api'
import {connect} from 'react-redux'
import {PROFILE_LOADED} from '../constants/actionTypes'

const mapStateToProps = (state)=>{
    return {
        profile:state.profile
    }
}
const mapDispatchToProps=(dispatch)=>({
    onLoad:(payload)=> dispatch({type:PROFILE_LOADED,payload})
})
export class Profile extends Component {
    componentWillMount(){
        let username = this.props.match.params.username
        let payload = Promise.all([api.profile.get(username),api.article.all(1)])
        this.props.onLoad(payload)
    }
    render() {
        let profile=this.props.profile
        if(!profile){
            return null
        }
        return (
            <div className="profile">
                <div className="banner">
                    <img src={profile.image} alt=""/>
                    <h3 className="text-center">{profile.username}</h3>
                </div>
                <div className="container">
                    <ul className="nav nav-tabs">
                        <li className="nav-item"><a href="" className="nav-link ">my</a></li>
                        <li className="nav-item"><a href="" className="nav-link active">my</a></li>
                    </ul>
                    <div className="article-list">
                        <div className="article-preview">
                            <div className="article-meta">
                                <img src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-0/p552x414/16830900_761989063956412_1706517993511544718_n.jpg?_nc_cat=108&_nc_ohc=AlHa52BcLpIAX9PTFPB&_nc_ht=scontent.fktm3-1.fna&_nc_tp=6&oh=07cc18913cfd592bf09c272afcf4c36f&oe=5ECA1BF0" alt=""/>
                                <div className="info">
                                    <a href="">name</a>
                                    <span className="date">00/00/00</span> 
                                </div>
                                <div className="like">
                                    <i class="fas fa-thumbs-up"></i>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">title</h5>
                                    <div className="card-text">text text</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
