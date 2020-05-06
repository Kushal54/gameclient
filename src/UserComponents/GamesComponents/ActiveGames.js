import React, { Component } from 'react'
import ActiveGame from './ActiveGamesComponents/ActiveGame'

import Axios from 'axios'

class ActiveGames extends Component {
    constructor(props){
        super(props)

        this.state = {
            userId: localStorage.getItem('game_user'),
            activeGames: null
        }
    }

    componentDidMount() {
        this.getActiveGames()
    }

    getActiveGames = () => {
        var data = {
            userId: this.state.userId
        }

        Axios.post('http://localhost:4000/game/active', data)
            .then(res => {
                if (res.data.success) {
                    this.setState({activeGames: res.data.games})
                }
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <h3>Active Games</h3>
                {this.state.activeGames ? 
                    (
                        <React.Fragment>
                            {this.state.activeGames.map((g, key) => <ActiveGame game={g} key={key} />)}
                        </React.Fragment>
                    )
                    :
                    (<p>no games active right now</p>)
                }
            </div>
        )
    }
}

export default ActiveGames