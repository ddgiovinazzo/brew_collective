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
        if (sendingRequest) return "Cancel Friend Request"
        else if (receivingRequest) return "Accept Friend Request"
        else if (accepted) return "Delete Friend"
        else return "Add Friend"
    }

    const handleFriendship = ()=>{

        if (accepted || sendingRequest){
            const friendshipId = requested ? requested.id : received.id
            deleteFriendship(friendshipId)
        }

        else if (receivingRequest){
            const friendship = {
                id: received.id,
                status: "accepted"
            }
            console.log(friendship)
            updateFriendship(friendship)
        }

        else {
            const friendship = {
                requestor_id: currentUser.id,
                receiver_id: user.id,
                status : "pending"
            }
            createFriendship(friendship)
        }
    }

 
    return <button onClick={handleFriendship} className="form-submit">{text()}</button>
}

export default FriendshipButton