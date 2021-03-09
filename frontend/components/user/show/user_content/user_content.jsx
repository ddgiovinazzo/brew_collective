import React from "react";
import Img from "../../../image/image";


const UserContentTop = (props) => {
    const { uniquesCount, currentUser} = props
    const {location, country} = currentUser

    const formatLocation = location ? `${location} ${country}` : country

    return (
        <div className='bct-container'>
            <div className='bct-row'>
                <div className="beer-content-left-container">
                    <div className='bct-img'>
                        {/* <Img className="beer-img" src={brewery.imageUrl} dft={window.defaultBeer} alt="brewery"/> */}
                    </div>
                    <div className='bct-title'>
                        <h1>{`${currentUser.firstName} ${currentUser.lastName}`}</h1>
                        <p>{currentUser.username}</p>
                        <p>{formatLocation}</p>
                        <p>{currentUser.gender}</p>
                    </div>

                </div>
                <div className='beer-content-right-container'>
                    <div className='home-grid-container'>
                        <div className='home-grid-row'>
                            <div>
                                <p>Total</p>
                                <p>{currentUser.checkIns.length}</p>
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
                                <p>0</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}


export default UserContentTop