import React, { Component, Profiler } from 'react'
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios'

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            profile : null
        }
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
        console.log(localStorage.getItem('game_user'))

        axios.get('http://localhost:4000/user/profile/'+localStorage.getItem('game_user'))
                .then(res => {
                    if (res.data.success) {                        
                        this.setState({profile : res.data.user})
                    }
                })
                .catch(err => console.log(err))
     }

render() {
    console.log(this.state)
    return (
        <div>
            {
            this.state.profile ? (
            <React.Fragment>
                <h1>{this.state.profile.personal.name}</h1>
            </React.Fragment>
            )
            :
            (
                <React.Fragment>
                    profile not found
                </React.Fragment>
            )
            }
        </div>
    )
}
}
export default Profile