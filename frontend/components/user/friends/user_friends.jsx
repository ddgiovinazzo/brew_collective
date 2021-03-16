import React from "react";
import UserSidebar from "../user_sidebar"
import UserSearch from "../../search/user_search"
import Fallback from "../../fallback/fallback";




const UserFriends = ({user, currentUserId, users}) => {
    
    if (!user || Object.values(users).length < 2) return <Fallback />
    const {friendshipsAsReceiver, friendshipsAsRequestor} = user
    const isCurrentUser = user.id === currentUserId
    const userTitle = isCurrentUser ? `Your` : `${user.firstName}'s`
    
    
    const labelFriends = (friendships) =>{
        const labeledFriendships = []

        friendships.forEach(friendship => {
            const {receiverId, requestorId} = friendship
            const isReceiver = user.id === friendship.requestorId
            const labledFriendship = {
                status: friendship.status,
                relationship: isReceiver ? `receiver` : `requestor`,
                friend: isReceiver ? users[receiverId] : users[requestorId]
            }
            labeledFriendships.push(labledFriendship)
        })
        return labeledFriendships
    }    
    const friendships = labelFriends(Object.values(friendshipsAsReceiver).concat(Object.values(friendshipsAsRequestor)))

    return (
        <div className="main-outer">

            <div className='home-grid'>
                <div id='main'>
                    <div id='content-container'>
                        <UserSearch friendships={friendships} placeholder={`Search ${userTitle} Friends`} isCurrentUser={isCurrentUser}/>
                    </div>
                    <UserSidebar user={user} isCurrentUser={isCurrentUser}/>
                </div>


            </div>

        </div>
    )


}

export default UserFriends