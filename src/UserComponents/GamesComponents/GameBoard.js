import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

class GameBoardLanding extends Component {
    constructor(props){
        super(props)

        this.state = {
            gameIdFromURL: this.props.match.params.gameId,
            game: null,
            gameClosed: false
        }
    }

    componentDidMount() {
        var data = {
            userId: localStorage.getItem('game_user'),
            gameId: this.state.gameIdFromURL
        }
        Axios.post('http://localhost:4000/game/getGame', data)
            .then(res => {
                console.log(res.data)
                if (res.data.success) {
                    this.setState({game: res.data.game})
                }
            })
            .catch(err => console.log(err))
    }

    close = () => {
        var data = {
            userId: localStorage.getItem('game_user'),
            tableNumber: this.state.game.tableNumber
        }

        Axios.post('http://localhost:4000/game/close', data)
            .then(res => {
                if (res.data.success) {
                    this.setState({gameClosed: true})
                }
            })
            .catch(err => console.log(err))
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                {this.state.game ? (<h1>{this.state.game.tableNumber}</h1>) : (null)}
                <p>
                    <button onClick={this.close}>Close the game</button>
                </p>
                {this.state.gameClosed? (<Redirect to={"/Games"} />) : (null)}
            </React.Fragment>
        )
    }
}

export default GameBoardLanding