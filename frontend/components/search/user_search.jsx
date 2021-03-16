import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Img from '../image/image'


const UserSearch = (props) => {
    const {friendships, placeholder, isCurrentUser} = props
    const [searchText, setSearchText] = useState("")
    if(!friendships)return null
    const handleSearch = (e) => {
        setSearchText(e.currentTarget.value)
    }

    const handleSort = (array) => {
        if (searchText)
        return array.sort((a, b) => {
                if (a.key[0].toLowerCase() === searchText[0].toLowerCase()) return -1
                else if (b.key[0].toLowerCase() === searchText[0].toLowerCase()) return 1
                else if (a.key < b.key) return -1
                else return 1
            })
        else return array
    }

    let results = []
    
    
    for (let i = 0; i < friendships.length; i++) {
        const friendship = friendships[i];
        const {friend, status, relationship} = friendship

        const receiver = status === `pending` && relationship === `receiver`
        const requestor = status === `pending` && relationship === `requestor`

        const name = `${friend.firstName} ${friend.lastName}`

        let friendStatus

        if (receiver) {
            friendStatus = (
                <p>Friend Request Sent</p>
                )
            }
            if (requestor) {
                friendStatus = (
                <p>Sent you a friend request</p>
            )
        }

        const result = (
            <div key={name} className="search-results">
                <Link to={`/user/${friend.id}`}>{name}</Link>
                    {isCurrentUser ? friendStatus : null}
                <Link to={`/user/${friend.id}`}>
                <Img className="beer-img user-img" src={friend.photoUrl} dft={window.defaultBeer} alt={name} />
                </Link>
            </div>
        )
        if(isCurrentUser){
            if (!searchText) results.push(result)
            if (searchText && name.toLowerCase().includes(searchText.toLowerCase())) results.push(result)
        }
        else if(!isCurrentUser && !receiver && !requestor){
            if (!searchText) results.push(result)
            if (searchText && name.toLowerCase().includes(searchText.toLowerCase())) results.push(result)
        }
    }

    if (!results.length && !searchText) return null

    return (

        <div id='recent-activity' className="bidx">
            <div className="bidx-search-bar-container">
                <div className="bidx-input-container">
                    <i className="fas fa-search fa-2x search-icon"></i>
                    <input placeholder={placeholder} onChange={handleSearch} id="bidx-search-bar" type="text" />
                </div>
            </div>
            <div id='beer-index-list-container'>
                <ul>
                    {handleSort(results)}
                </ul>
            </div>
        </div>

    )
}

export default UserSearch