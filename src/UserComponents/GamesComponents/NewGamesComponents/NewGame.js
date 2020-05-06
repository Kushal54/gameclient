import React from 'react'

const NewGame = ({gameName, rules, numberOfPlayers, createNewGame}) => {
    return(
        <React.Fragment>
            <p>
                <h6>{gameName}</h6>
                <p>{rules}</p>
                <p>{numberOfPlayers}</p>
                <button onClick={createNewGame}>Create</button>
            </p>
        </React.Fragment>
    )
}

export default NewGame