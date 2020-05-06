import React from 'react'
import FormButton from '../../ReusableComponents/FormButton'

const SearchedFriend = ({searchedResult, sendFriendRequest}) => {
    return(
        <React.Fragment>
            <br/>
            {searchedResult.user.personal.name} - {searchedResult.status === 'new' ? (<FormButton onclickfunction={sendFriendRequest} value="send request" type="small" />) : ((searchedResult.status === 'sentpending' ? ('arrow') : ((searchedResult.status === 'recievedpending' ? ('A/D') : ( (searchedResult.status === 'friends' ? ('friends') : (null)) )))))}<br/>
        </React.Fragment>
    )
}

export default SearchedFriend