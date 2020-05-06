import React from 'react'

const FriendsList = ({friendList}) => {
    console.log(friendList)
    return(
        <React.Fragment>
            {friendList.friends.map((l, key) => <p key={key}>{l.cred.username} </p>)}
        </React.Fragment>
    )
}
export default FriendsList

