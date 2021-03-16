import React, { useState, useEffect } from "react";

const FriendshipButton = (props) =>{
    const {currentUser, user} = props
    const {createFriendship, updateFriendship, deleteFriendship} = props

    const requested = currentUser.friendshipsAsRequestor[user.id]
    const sendingRequest = requested && requested.status === "pending"

    const received = currentUser.friendshipsAsReceiver[user.id]
    const receivingRequest = received && received.status === "pending"

    const acceptedSentrequest = requested && requested.status === "accepted"
    const acceptedReceivedRequest = received && received.status === "accepted"
    const accepted = acceptedSentrequest || acceptedReceivedRequest
    
    const text = ()=>{
        if (sendingRequest) return "Friend Request Sent"
        else if (receivingRequest) return "Accept Friend Request"
        else if (accepted) return "Delete Friend"
        else return "Add Friend"
    }
    
    const handleDelete=()=>{
        const friendshipId = requested ? requested.id : received.id
        deleteFriendship(friendshipId)
    }

    const handleUpdate=()=>{
        const friendship = {
            id: received.id,
            status: "accepted"
        }
        console.log(friendship)
        updateFriendship(friendship)
    }

    const handleCreate=()=>{
        const friendship = {
            requestor_id: currentUser.id,
            receiver_id: user.id,
            status : "pending"
        }
        createFriendship(friendship)
    }
    
    const handleFriendship = ()=>{
        if (accepted) handleDelete()
        else if (receivingRequest) handleUpdate()
        else handleCreate()
    }


 
    return(
        <div>
                {
                    !sendingRequest ?
                        <button onClick={handleFriendship} className="form-submit">{text()}</button>
                        : null

                }
            {
                sendingRequest || receivingRequest ?
                <button onClick={handleDelete} className="form-submit friend-button">Cancel Friend Request</button>
                :null
            }
        </div>
    )
}

export default FriendshipButton