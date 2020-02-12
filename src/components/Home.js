import React, { Component } from 'react'
import {Container,Col,Card,Row} from 'react-bootstrap'
import api from '../services/api'
import {connect} from 'react-redux'
const mapDispatchToProps = (dispatch)=>({
  getAllArticle:()=>{
    console.log('all article')
  }
})
export class Home extends Component {
  componentWillMount(){
    let payload=api.article.all()
    this.props.getAllArticle()
  }
  render() {
    return (
      <Container>
        <h3 className="text-center" style={{padding:'40px 0'}}>My App</h3>
        <Row>
          <Col md={8}>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            my tags
          </Col>
        </Row>
      </Container>
      
      
    )
  }
}

export default connect(null,mapDispatchToProps)(Home)
