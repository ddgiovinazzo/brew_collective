import React from "react";
import {Link} from 'react-router-dom'
import {elapsedTime} from '../../../util/time_util'


const CheckInShow = ({checkIn, user, beer, brewery})=>{
        
    if(!checkIn || !user || !beer) return null
    return(
        <div className="check-in-content">
            <p>
            <Link to={`/user/${user.id}`}>{`${user.firstName} ${user.lastName[0]}.`}</Link>
            {' is drinking a '}
            <Link to={`/beer/${beer.id}`}>{`${beer.name}`}</Link>
            {' by '}
            <Link to={`/brewery/${brewery.id}`}>{`${brewery.name}`}</Link>
            </p>
            <br/>
            <p>{`${checkIn.review} - ${elapsedTime(checkIn.createdAt)}`}</p>
        </div>
    )
}

export default CheckInShow