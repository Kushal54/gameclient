import React, { Profiler } from 'react'
import Register from '../GeneralComponents/Register'
import {Switch,Route} from 'react-router-dom'
import Login from '../GeneralComponents/Login'
import Profile from '../UserComponents/Profile'
import Friends from '../UserComponents/Friends'
import Games from '../UserComponents/Games'
const MyRouter = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route path="/Register" exact component={Register} />    
                <Route path="/Login" exact component={Login} />   
                <Route path="/Profile" exact component={Profile} />   
                <Route path="/Friends" exact component={Friends} />   
                <Route path="/Games" exact component={Games} />
            </Switch>
        </React.Fragment>
    )
}

export default MyRouter