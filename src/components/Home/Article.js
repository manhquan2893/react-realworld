import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

const Article= props => {
    return (
        <Card className="article-preview">
            <Card.Body>
                <Card.Title>{props.article.title}</Card.Title>
                <Card.Text>
                    {props.article.body}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Article
