import React, { useState, useEffect } from "react";

const CheckInShow = ({checkIn, fetchUser, user})=>{
    
    const [update, setUpdate] = useState(false)
    
    useEffect(() => {fetchUser(checkIn.user_id)}, [update])
    
    if(!checkIn || !user) return null
    
    return(
        <div>
            <p>{checkIn.review} - {user.username}</p>
        </div>
    )
}

export default CheckInShow