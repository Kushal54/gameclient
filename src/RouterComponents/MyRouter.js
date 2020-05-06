import React, { Profiler } from 'react'
import Register from '../GeneralComponents/Register'
import {Switch,Route} from 'react-router-dom'
import Login from '../GeneralComponents/Login'
import Profile from '../UserComponents/Profile'
import Friends from '../UserComponents/Friends'
import Games from '../UserComponents/Games'
import GameBoardLanding from '../UserComponents/GamesComponents/GameBoardLanding'
import GameBoard from '../UserComponents/GamesComponents/GameBoard'

const MyRouter = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route path="/Register" exact component={Register} />    
                <Route path="/Login" exact component={Login} />   
                <Route path="/Profile" exact component={Profile} />   
                <Route path="/Friends" exact component={Friends} />   
                <Route path="/Games" exact component={Games} />
                <Route path="/GameBoardLanding/:gameId" exact component={GameBoardLanding} />
                <Route path="/GameBoard/:gameId" exact component={GameBoard} />
            </Switch>
        </React.Fragment>
    )
}

export default MyRouter