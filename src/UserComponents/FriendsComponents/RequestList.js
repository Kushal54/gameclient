import React from 'react'
import FormButton from '../../ReusableComponents/FormButton'

const RequestList = ({requestList,acceptRequest,declineRequest}) => {
    console.log(requestList)
    return(
    <React.Fragment>
        <h5>Request List</h5>
        {requestList.list.map((l, key) => <p key={key}>{l.from.cred.username} - <button value={l.from._id} onClick={acceptRequest} type="small">accept</button> <button value={l.from._id} onClick={declineRequest} type="small">decline</button> </p>)}
    </React.Fragment>
    )
}
export default RequestList