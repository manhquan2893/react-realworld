import React, { Component } from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const LogInView=(props)=>{
    if(props.currentUser){
        return (
            <Navbar expand="sm" className="bg-light">
                <Container>
                    <Navbar.Brand>Conduit</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/editor" className="nav-link">New Posts</Link>
                            <Link to="/register" className="nav-link">Settings</Link> 
                            <Link to="/" className="nav-link">{props.currentUser.username}</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            )
    }
    return null
}
const LogOutView = (props)=>{
    if(!props.currentUser){
        return (
        <Navbar expand="sm" className="bg-light">
            <Container>
                <Navbar.Brand>Conduit</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/login" className="nav-link">Log in</Link>
                        <Link to="/register" className="nav-link">Register </Link>                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            )
    }
    return null
}
export class Header extends Component {
    
    render() {
        return (
            <div>
            <LogOutView currentUser={this.props.currentUser}/>
            <LogInView currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

export default Header
