import React, { Component } from 'react'

import Form from './RegisterSubComponents/Form'
import { Link, Redirect } from 'react-router-dom'

import axios from 'axios'

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            view : true,
            c_password : "",
            password : "",
            errorMsg: null,
            registeredSuccessfully: false

        }
    }

    onChangeValue = (e) => {        
        this.setState({[e.target.name]: e.target.value})        
    }

    registerUser = () => {
        if(this.state.password === this.state.c_password){

            var data = {
                name: this.state.name,
                age: this.state.age,
                bio: this.state.bio,
                gender: this.state.gender,
                username: this.state.username,
                password: this.state.password
            }            

            axios.post('http://localhost:4000/user/register', data)
                .then(res => {
                    if (res.data.success) {
                        console.log(res.data)
                        this.setState({registeredSuccessfully: true})
                    } else {
                        this.setState({errorMsg: res.data.msg})
                    }
                })
                .catch(err => console.log(err))

        }
        else{
            this.setState({errorMsg: 'password doent match.'})
                
        }
    }

    render() {
        console.log('Register component rendered')
        return (
            <div>
                {this.state.errorMsg ? 
                    (
                        <p>{this.state.errorMsg}</p>
                    )
                    :
                    (null)
                }
                <Form onChangeValue={this.onChangeValue} onclickfunction={this.registerUser} view={this.state.view} />                
                <Link to='/Login'>Login Link</Link>

                {this.state.registeredSuccessfully ? (<Redirect to="/Login" />) : (null)}
            </div>
        )
    }
}
export default Register