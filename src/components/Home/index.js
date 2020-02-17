import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import MainView from './MainView'
import api from '../../services/api'
import {HOME_PAGE_LOADED} from '../../constants/actionTypes'
import {connect} from 'react-redux'

const mapDispatchToProps=(dispatch)=>({
    onLoad:(payload)=>{ dispatch({type:HOME_PAGE_LOADED,payload})}
})
export class index extends Component {
    componentWillMount(){
        let payload=api.article.all(1)
        this.props.onLoad(payload)
    }
    render() {
        console.log('render home')
        return (
            <div>
                <h3 className='text-center' style={{padding:'40px 0'}}>My App</h3>
                <Container>
                    <Row>
                        <Col md={8}>
                            <MainView />
                        </Col>
                        <Col md={4}>
                            tags
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect(null,mapDispatchToProps)(index)
