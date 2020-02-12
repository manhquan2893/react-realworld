import React, { Component } from 'react'
import {UPDATE_FIELD_AUTH,REGISTER} from '../constants/actionTypes'
import { connect } from 'react-redux';
import api from '../services/api'

const mapStateToProps= (state)=>{
    return {...state.auth}
}
const mapDispatchToProps=(dispatch)=>({
    onChangeEmail:(value)=>{
        dispatch({type:UPDATE_FIELD_AUTH,key:'email',value:value})},
    onChangeUsername:(value)=>
        dispatch({type:UPDATE_FIELD_AUTH,key:'username',value:value}),
    onChangePassword:(value)=>
        dispatch({type:UPDATE_FIELD_AUTH,key:'password',value:value}),
    onSubmit:(username, email, password)=>{
        let payload= api.auth.register(username,email,password)
        dispatch({type:REGISTER,payload})
    }
})
export class Register extends Component {
    constructor(props){
        super(props);
        this.changeEmail= (ev)=> this.props.onChangeEmail(ev.target.value)
        this.changeUsername= (ev)=> this.props.onChangeUsername(ev.target.value)
        this.changePassword= (ev)=> this.props.onChangePassword(ev.target.value)
        this.submitForm=(username,email,password)=>(ev)=>{
            ev.preventDefault()
            this.props.onSubmit(username,email,password)
        } 
    }
    render() {
        let username=this.props.username
        let email= this.props.email
        let password= this.props.password
        let errors= this.props.errors
        let formStyle={
            width:'400px'
        }
        return (
            <div className="login mx-auto" style={formStyle}>
                <h3 className="text-center">Register</h3>
                <ul>
                    {errors ?(
                        Object.keys(errors).map((key)=>{
                        return <li key={key}> {key} {errors[key]}</li>
                        })
                    ):
                    null
                    }
                </ul>
                <form className="mx-auto" onSubmit={this.submitForm(username,email,password)}>
                    <div className="form-group">
                        <input type="text" className="form-control" 
                        onChange={this.changeEmail} placeholder="Email"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                        onChange={this.changeUsername} placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" 
                        onChange={this.changePassword} placeholder="Password"/>
                    </div>
                    <button className="btn btn-primary float-right">Register</button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)
