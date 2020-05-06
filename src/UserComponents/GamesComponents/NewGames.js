import React, { Component } from 'react'
import NewGame from './NewGamesComponents/NewGame'


class NewGames extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h3>New Games</h3>

                <NewGame />
                <NewGame />
                <NewGame />
                <NewGame />
            </div>
        )
    }
}

export default NewGames