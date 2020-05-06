
import React, { Component } from 'react'
import SearchFriends from './FriendsComponents/SearchFriends'
import FriendsList from './FriendsComponents/FriendsList'
import RequestList from './FriendsComponents/RequestList'

import Axios from 'axios'

class Friends extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: localStorage.getItem('game_user'),
            searchUserText: null,
            searchedResult: null,
            requestList: null
        }
    }

    componentDidMount() {
        this.getRequestList()
        this.friendsList()
    }

    searchUser = (e) => {
        this.setState({searchUserText: e.target.value})
        var data = {
            searchedUsername: e.target.value,
            user: this.state.user
        }

        Axios.post('http://localhost:4000/user/search/username', data)
            .then(res => {
                if (res.data.success) {
                    console.log(res.data)
                    this.setState({searchedResult: res.data})
                }
            })
            .catch(err => console.log(err))
    }
    // .then(res => {
    //     if (res.data.success) {
    //         console.log(res.data)
    //     }
    // })
    // .catch(err => console.log(err))
    refreshStatus = (username) => {
        this.setState({searchUserText: username})
        var data = {
            searchedUsername: username,
            user: this.state.user
        }

        Axios.post('http://localhost:4000/user/search/username', data)
            .then(res => {
                if (res.data.success) {
                    console.log(res.data)
                    this.setState({searchedResult: res.data})
                }
            })
            .catch(err => console.log(err))
    }
    sendFriendRequest = () => {
        var data = {
            from: this.state.user,
            to: this.state.searchedResult.user._id
        }
        
        Axios.post('http://localhost:4000/user/send/request', data)
            .then(res => {
                if (res.data.success) {
                    console.log(res.data)
                    this.refreshStatus(res.data.username)
                }
            })
            .catch(err => console.log(err))
    }

    getRequestList = () => {        

        Axios.get('http://localhost:4000/user/request/list/'+this.state.user)
            .then(res => {
                if (res.data.success) {
                    this.setState({requestList: res.data})
                }
            })
            .catch(err => console.log(err))
    }

    acceptRequest = (e) => {
        var data = {
            from: e.target.value,
            to: this.state.user
        }
        // console.log(data)
        Axios.post('http://localhost:4000/user/request/acceptRequest',data)
            .then(res => {
                if (res.data.success) {
                    this.componentDidMount()
                }
            })
            .catch(err => console.log(err))
    }


    
    declineRequest = (e) => {
        var data = {
            from: e.target.value,
            to: this.state.user
        }
    
    Axios.post('http://localhost:4000/user/request/declineRequest',data)
            .then(res => {
                if (res.data.success) {
                    this.componentDidMount()
                }
            })
            .catch(err => console.log(err))
    }
    friendsList = () => {
        console.log("in")
        var data = {
            user : this.state.user
        }
    Axios.post('http://localhost:4000/user/FriendsList',data)
            .then(res => {
                if (res.data.success) {
                    this.setState({friendsList: res.data.flist})
                    console.log(this.state.friendsList)
                }
            })
            .catch(err => console.log(err))

    }
    render() {
        return (
            <div>
                Friends<br/>
                <SearchFriends searchUser={this.searchUser} searchedResult={this.state.searchedResult} sendFriendRequest={this.sendFriendRequest}/>
                {this.state.friendsList ? (<FriendsList friendList={this.state.friendsList} />) : (<p>gt a lif</p>)}
                {this.state.requestList ? (<RequestList requestList={this.state.requestList} declineRequest={this.declineRequest} acceptRequest={this.acceptRequest} />) : (<p>no request!</p>)}
            </div>
        )
    }
}

export default Friends
//<FriendsList friendList={this.state.friendsList} />
