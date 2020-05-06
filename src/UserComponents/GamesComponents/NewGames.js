import React, { Component } from 'react'
import NewGame from './NewGamesComponents/NewGame'

import Axios from 'axios'
import {Redirect} from 'react-router-dom'


class NewGames extends Component {
    constructor(props){
        super(props)

        this.state = {
            userId: localStorage.getItem('game_user'),
            newGameCreatedData: null,
            newGameCreated: false
        }
    }

    createNewGame = () => {
        
        var data = {
            creator: this.state.userId
        }

        Axios.post('http://localhost:4000/game/create', data)
            .then(res => {
                if (res.data.success) {
                    this.setState({newGameCreatedData: res.data.newGame, newGameCreated: true})
                }
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                <h3>New Games</h3>

                <NewGame gameName={"2 truths and a lie"} rules={"hmm"} numberOfPlayers={"2"} createNewGame={this.createNewGame} />
                {this.state.newGameCreated ? (<Redirect to={{pathname: "/GameBoardLanding/"+this.state.newGameCreatedData._id}} />) : (null)}
            </div>
        )
    }
}

export default NewGames