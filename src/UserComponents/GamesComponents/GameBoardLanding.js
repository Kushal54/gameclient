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
            go: false
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

    go = () => {
        this.setState({go: true})
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.gameIdFromURL}
                {this.state.game ? 
                    (
                        <React.Fragment>

                        <p>table number: {this.state.game.tableNumber}<br/>password: {this.state.game.password}</p>

                        <CopyToClipboard text={"hey! How you doin?\n\nIwould like to invite you to play 2 truths and a lie game with me..\n\nhere is the information to join me.\n\ntable number: "+this.state.game.tableNumber+" - password: "+this.state.game.password}>
                            <button>Copy to clipboard</button>
                        </CopyToClipboard>
                        
                        <button onClick={this.go}>Go To GameBoard</button>
                        </React.Fragment>
                    )
                    :
                    (null)
                }
                {this.state.go ? (<Redirect to={"/GameBoard/"+this.state.gameIdFromURL} />) : (null)}
            </div>
        )
    }
}

export default GameBoardLanding