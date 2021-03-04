import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import {elapsedTime} from '../../../util/time_util'


const CheckInShow = ({checkIn, fetchUser, user, beer})=>{
    
    const [update, setUpdate] = useState(false)
    
    useEffect(() => {
        if(!user)fetchUser(checkIn.user_id)
    }, [update])
    
    if(!checkIn || !user) return null
    return(
        <div className="check-in-content">
            <p>
            <Link to={`/user/${user.id}`}>{`${user.firstName} ${user.lastName[0]}.`}</Link>
            {' is drinking a '}
            <Link to={`/beer/${beer.id}`}>{`${beer.name}.`}</Link>
            </p>
            <br/>
            <p>{`${checkIn.review} - ${elapsedTime(checkIn.created_at)}`}</p>
        </div>
    )
}

export default CheckInShow