import React from 'react'
import FormInput from '../../ReusableComponents/FormInput'
import FormButton from '../../ReusableComponents/FormButton'
import SearchedFriend from './SearchedFriend'

const SearchFriends = ({searchUser, searchedResult, sendFriendRequest}) => {
    return(
        <React.Fragment>
            <FormInput type="text" id="searchUser" name="searchUser" placeholder="enter username" onChangeValue={searchUser}/>
            {searchedResult ? (<SearchedFriend searchedResult={searchedResult} sendFriendRequest={sendFriendRequest} />) : (null)}
        </React.Fragment>
    )
}

export default SearchFriends