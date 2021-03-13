import React, { useState, useEffect } from "react";

const CheckInForm = (props) => {
    const { setOpenModal, user, beer, createCheckIn, createAward} = props
    const user_id = user.id
    const beer_id = beer.id
    const [counter, setCounter] = useState(255)

    const awardCreate =  (user, beer) =>{
        const {awards} = user
    
        const newAward={user_id: user.id, badge_name: null}
    
        const awardsList = []
        if(user.checkIns.length > 4 && !awards["apprentice"]){
            newAward.badge_name = "Apprentice"
            createAward(newAward)
            awardsList.push(newAward.badge_name)
        }
    
        else if(user.checkIns.length < 5 && awards["apprentice"])
            deleteAward(awards["Apprentice"].id)
    
        if(user.checkIns.length >= 10 && !awards["journeyman"]){
            newAward.badge_name = "Journeyman"
            createAward(newAward)
            awardsList.push(newAward.badge_name)
        }
    
        else if(user.checkIns.length < 5 && awards["journeyman"])
            deleteAward(awards["Journeyman"].id)
    
        if(beer.servingStyle.includes("IPA") && !awards["i Believe in IPA!"]){
            newAward.badge_name = "I Believe in IPA!"
            createAward(newAward)
            awardsList.push(newAward.badge_name)
        }
        
        if(
            beer.servingStyle.includes("Porter") && !awards["heavy Weight"] ||
            beer.servingStyle.includes("Stout") && !awards["Heavy Weight"]
        ){
            newAward.badge_name = "Heavy Weight"
            createAward(newAward)
            awardsList.push(newAward.badge_name)
        }
    
        if(beer.servingStyle.includes("Hefeweizen") && !awards["heffenista"]){
            newAward.badge_name = "Heffenista"
            createAward(newAward)
            awardsList.push(newAward.badge_name)
        }
        return awardsList
    }

    const [checkIn, setCheckIn] = useState({
        user_id,
        beer_id,
        review: "",
        rating: 0
    })

    const handleText = (e) => {
        const handleCheckIn = Object.assign({}, checkIn)
        handleCheckIn["review"] = e.currentTarget.value

        setCounter(255 - e.currentTarget.value.length)
        setCheckIn(handleCheckIn)
    }

    const handleInput = (type) => {
        const handleCheckIn = Object.assign({}, checkIn)
        return (e)=>{
            handleCheckIn[type] = e.currentTarget.value
             setCheckIn(handleCheckIn)
        }
    }

    const displayRating = (rating)=>{
        if(rating === '1') return '1 Star'
        if(parseInt(rating) > 1) return `${rating} Stars`
        else return 'No Rating'
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createCheckIn(checkIn)
        .then((action)=>{
            awardCreate(action.all.user, beer)
            setOpenModal(false)
        })
    }

    return (
        <div className="modal-outer" onClick={() => setOpenModal(false)}>
            <div className="modal-form-container" onClick={(e) => e.stopPropagation()}>
                <div className="check-in-top">
                    <p>Check-In</p>
                    <p onClick={() => setOpenModal(false)}>&times;</p>
                </div>
                <form className="modal-form">

                    <div className="review-container">
                        <textarea onChange={handleText} placeholder="What did you think?" maxLength="255"></textarea>
                        <p className="counter">{counter}</p>
                    </div>
                    <div className="slide-container">
                        <input onChange={handleInput("rating")} type="range" min="0" max="5" defaultValue="0" className="slider" id="slider" />
                        <div>{displayRating(checkIn.rating)}</div>
                    </div>

                    <button onClick={handleSubmit} className='form-submit'>Confirm</button>


                </form>
            </div>
        </div>
    )
}

export default CheckInForm