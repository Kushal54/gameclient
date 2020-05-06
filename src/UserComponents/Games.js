import React, { Component } from 'react'
import ActiveGames from './GamesComponents/ActiveGames'
import NewGames from './GamesComponents/NewGames'

class Games extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ActiveGames />
                    </div>
                    <div className="col-md-8">
                        <NewGames />
                    </div>
                </div>
            </div>
        )
    }
} 
export default Games