import React from "react";
import { Link } from "react-router-dom"
import Img from "../image/image";
import SetImg from "../image/set_image";
import FriendshipButtonContainer from "../friendship/friendship_button_container";



const UserSidebar = ({user, isCurrentUser}) => {

    const currentUserPhoto = <SetImg className="beer-img user-img" src={user.photoUrl} dft={window.defaultBeer} alt="user" />
    const userPhoto = (
                    <Link to={`/user/${user.id}`}>
                        <Img className="beer-img user-img" src={user.photoUrl} dft={window.defaultBeer} alt="user" />
                    </Link>
    )

    return (

        <div id='sidebar'>
            <div className="personal-stats">
                <div className="home-username">
                    {isCurrentUser ? currentUserPhoto : userPhoto}
                    <Link to={`/user/${user.id}`}>
                        <h1>{`${user.firstName} ${user.lastName}`}</h1>
                    </Link>
                    <p><i className="fas fa-user home-icon"></i> {user.username}</p>
                    <p>{user.location}</p>
                    <p>{user.country}</p>
                    <p>{user.gender}</p>
                </div>

                <div className='home-grid-container'>
                    <div className='home-grid-row'>
                        <Link to={`/user/${user.id}`}>
                            <p>Total</p>
                            <p>{user.checkIns.length}</p>
                        </Link>
                        <Link to={`/user/${user.id}/beers`}>
                            <p>Unique</p>
                            <p>{user.uniqueCheckIns}</p>
                        </Link>
                        <Link to={`/user/${user.id}/friends`}>
                            <p>Friends</p>
                            <p>{user.friendIds.length}</p>
                        </Link>
                    </div>

                    {
                        !isCurrentUser ?
                            <FriendshipButtonContainer
                                user={user} />
                            : null
                    }
                </div>

            </div>
        </div>

    )
}

export default UserSidebar