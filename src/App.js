import React, { Component } from 'react'
import {Switch,Route} from 'react-router'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Header from './components/Header'
import Editor from './components/Editor'
import Profile from './components/Profile'
import {push} from 'connected-react-router'
import {connect} from 'react-redux'
import store from './configureStore'
import {REDIRECT,APP_LOAD} from './constants/actionTypes'
import api from './services/api'
const mapStateToProps= state=>{
  return {
      redirectTo:state.auth.redirectTo,
      currentUser:state.auth.currentUser
  }
}
const mapDispatchToProps=dispatch => ({
  onRedirect: () =>
    dispatch({ type: REDIRECT }),
  onLoad:(payload,token) =>{
    dispatch({ type: APP_LOAD,payload,token})
  }
});
export class App extends Component {
  componentWillReceiveProps(nextProps){
    if(nextProps.redirectTo){
      store.dispatch(push('/'))
      this.props.onRedirect()
    }
  }
  componentWillMount(){
    let token= localStorage.getItem('jwt')
    if(token){
      api.setHeader(token)
      let payload=api.auth.current()
      this.props.onLoad(payload,token)
    }
  }
  render() {
    return (
      <div>
        <Header currentUser={this.props.currentUser}/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/editor" component={Editor} />
            <Route path="/@:username" component={Profile} />
            {/* <Route path="/@:username" component={Profile} /> */}
        </Switch>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
