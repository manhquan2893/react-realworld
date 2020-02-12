import React, { Component } from 'react'
import {UPDATE_FIELD_AUTH,LOGIN} from '../constants/actionTypes'
import { connect } from 'react-redux';
import api from '../services/api'

const mapStateToProps= (state)=>{
    return {...state.auth}
}
const mapDispatchToProps=(dispatch)=>({
    onChangeEmail:(value)=>{
        dispatch({type:UPDATE_FIELD_AUTH,key:'email',value:value})},
    onChangePassword:(value)=>
        dispatch({type:UPDATE_FIELD_AUTH,key:'password',value:value}),
    onSubmit:(email, password)=>{
        let payload= api.auth.login(email,password)
        dispatch({type:LOGIN,payload})
    }
})
export class Login extends Component {
    constructor(props){
        super(props);
        this.changeEmail= (ev)=> this.props.onChangeEmail(ev.target.value)
        this.changeUsername= (ev)=> this.props.onChangeUsername(ev.target.value)
        this.changePassword= (ev)=> this.props.onChangePassword(ev.target.value)
        this.submitForm=(email,password)=>(ev)=>{
            ev.preventDefault()
            this.props.onSubmit(email,password)
        } 
    }
    render() {
        let email= this.props.email
        let password= this.props.password
        let errors =this.props.errors
        let formStyle={
            width:'500px'
        }
        return (
            <div className="login">
                <h3 className="text-center">Login</h3>
                <ul>
                    {errors ?(
                        Object.keys(errors).map((key)=>{
                        return <li key={key}> {key} {errors[key]}</li>
                        })
                    ):
                    null
                    }
                </ul>
                <form className="mx-auto" style={formStyle} onSubmit={this.submitForm(email,password)}>
                    <div className="form-group">
                        <input type="text" className="form-control" 
                        onChange={this.changeEmail} placeholder="Email"
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" 
                        onChange={this.changePassword} placeholder="Password"/>
                    </div>
                    <button className="btn btn-primary float-right">Login</button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)

