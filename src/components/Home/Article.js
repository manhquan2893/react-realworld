import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import dateFilter from '../../filters/dateFilter'
import {Link} from 'react-router-dom'
const Article= props => {
    return (
        <div className="article-preview">
            <Card>
                <div className="article-meta">
                    <img src={props.article.author.image} alt="" />
                    <div className="info">
                        <Link to={`/@${props.article.author.username}`} href="" className="username">{props.article.author.username}</Link>
                        <span className="createdAt">{dateFilter.toDMY(props.article.createdAt)}</span>
                    </div>
                    <div className="float-right">
                        <button className="like">
                            <i className="fas fa-thumbs-up"></i>
                        </button>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title>{props.article.title}</Card.Title>
                    <Card.Text>
                        {props.article.body}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Article
