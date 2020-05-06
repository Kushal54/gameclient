import React, { Component } from 'react'
import ActiveGame from './ActiveGamesComponents/ActiveGame'

class ActiveGames extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h3>Active Games</h3>
                <ActiveGame />
                <ActiveGame />
                <ActiveGame />
            </div>
        )
    }
}

export default ActiveGames