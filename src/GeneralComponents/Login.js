import React, { Component } from 'react'
import LoginForm from './RegisterSubComponents/LoginForm'
import { Link,Redirect } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            errorMsg : null,
            LoginSuccessfully: false
        }
    }
    onChangeValue = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    LoginFunction = () => {
            var data = {
                username: this.state.username,
                password: this.state.password
            }            

            axios.post('http://localhost:4000/user/login', data)
                .then(res => {
                    if (res.data.success) {
                        console.log(res.data)
                        localStorage.setItem('game_user', res.data.userId)
                       
                        this.setState({LoginSuccessfully: true})
                    } else {
                        this.setState({errorMsg: res.data.msg})
                        console.log(this.state.errorMsg)
                    }
                })

                .catch(err => console.log(err))

        
        
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <LoginForm onChangeValue={this.onChangeValue} onclickfunction={this.LoginFunction}></LoginForm>                
                <Link to="/Register">Register Link</Link>

                {this.state.LoginSuccessfully ? (<Redirect to="/Profile" />) : (null)}
            </div>
        )
    }
}

export default Login