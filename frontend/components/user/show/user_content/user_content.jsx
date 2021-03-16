import React from "react";
import Img from "../../../image/image";
import SetImg from "../../../image/set_image";
import FriendshipButton from "../../../friendship/friendship_button_container";
import UserStats from "../../user_stats"

const UserContentTop = (props) => {
    const { uniquesCount, user, currentUser } = props
    const { firstName, lastName, username, location, gender, checkIns, country } = user

    const isCurrentUser = user.id === currentUser.id
    const name = isCurrentUser ? `${firstName} ${lastName}` : `${firstName} ${lastName[0]}.`

    const changeImage = <SetImg className="beer-img user-img" src={user.photoUrl} dft={window.defaultBeer} alt="user" />
    const image = <Img className="beer-img user-img" src={user.photoUrl} dft={window.defaultBeer} alt="user" />

    return (
        <div className='bct-container'>
            <div className='bct-row'>
                <div className="beer-content-left-container">
                    <div className='bct-img'>
                        {isCurrentUser ? changeImage : image}
                    </div>
                    <div className='uc-title'>
                        <h1>{name}</h1>
                        <p>{username}</p>
                        <p id="uc-location">{location ? location : null}</p>
                        <p>{country}</p>
                        <p>{gender ? gender : null}</p>
                    </div>

                </div>
                <div className='beer-content-right-container'>
                    <UserStats user={user}/>
                </div>

            </div>
            {
                !isCurrentUser ?
                    <FriendshipButton
                        currentUser={currentUser}
                        user={user} />
                    : null
            }
        </div>

    )
}

export default UserContentTop