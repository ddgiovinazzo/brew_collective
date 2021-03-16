import React from "react";
import UserSidebar from "../user_sidebar"
import BeerSearch from "../../search/beer_search"
import Fallback from "../../fallback/fallback";




const UserBeers = ({user, currentUserId}) => {

    if (!user) return <Fallback />
    const isCurrentUser = user.id === currentUserId
    const userTitle = isCurrentUser ? `Your` : `${user.firstName}'s`

    return (
        <div className="main-outer">

            <div className='home-grid'>
                <div id='main'>
                    <div id='content-container'>
                        <BeerSearch beers={Object.values(user.beers)} placeholder={`Search ${userTitle} Checked-In Beers`}/>
                    </div>
                    <UserSidebar user={user} />
                </div>


            </div>

        </div>
    )


}

export default UserBeers