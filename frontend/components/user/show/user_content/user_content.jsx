import React from "react";
import Img from "../../../image/image";
import FriendshipButton from "../../../friendship/friendship_button_container";


const UserContentTop = (props) => {
    const { uniquesCount, user, currentUser} = props
    const {firstName, lastName, username, location, gender, checkIns} = user
  
    const isCurrentUser = user.id === currentUser.id
    const name = isCurrentUser ? `${firstName} ${lastName}` : `${firstName} ${lastName[0]}.`



    return (
        <div className='bct-container'>
            <div className='bct-row'>
                <div className="beer-content-left-container">
                    <div className='bct-img'>
                        {/* <Img className="beer-img" src={brewery.imageUrl} dft={window.defaultBeer} alt="brewery"/> */}
                    </div>
                    <div className='bct-title'>
                        <h1>{name}</h1>
                        <p>{username}</p>
                        <p>{location ? location : null}</p>
                        <p>{gender ? gender : null}</p>
                    </div>

                </div>
                <div className='beer-content-right-container'>
                    <div className='home-grid-container'>
                        <div className='home-grid-row'>
                            <div>
                                <p>Total</p>
                                <p>{checkIns.length}</p>
                            </div>
                            <div>
                                <p>Unique</p>
                                <p>{uniquesCount}</p>
                            </div>
                        </div>
                        <div className='home-grid-row'>
                            <div>
                                <p>Badges</p>
                                <p>0</p>
                            </div>
                            <div>
                                <p>Friends</p>
                                <p>{user.friends}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {
                !isCurrentUser ?  
                    <FriendshipButton 
                    currentUser={currentUser} 
                    user={user}/>
                    : null
            }
        </div>

    )
}

export default UserContentTop