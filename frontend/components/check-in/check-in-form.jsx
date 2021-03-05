import React, { useState, useEffect } from "react";

const CheckInForm = (props) => {
    const { setOpenModal, user_id, beer_id, createCheckIn, setUpdate, update} = props
    const [counter, setCounter] = useState(255)

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

    const handleRating = (e) => {
        const handleCheckIn = Object.assign({}, checkIn)
        handleCheckIn["rating"] = e.currentTarget.value
        setCheckIn(handleCheckIn)
    }

    const displayRating = (rating)=>{
        if(rating === '1') return '1 Star'
        if(parseInt(rating) > 1) return `${rating} Stars`
        else return 'No Rating'
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createCheckIn(checkIn)
        .then(()=>{
            setUpdate(update + 1)
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
                        <input onChange={handleRating} type="range" min="0" max="5" defaultValue="0" className="slider" id="slider" />
                        <div>{displayRating(checkIn.rating)}</div>
                    </div>
                    <button onClick={handleSubmit} className='form-submit'>Confirm</button>


                </form>
            </div>
        </div>
    )
}

export default CheckInForm