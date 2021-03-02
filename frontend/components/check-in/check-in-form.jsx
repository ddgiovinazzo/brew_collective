import React, { useState, useEffect } from "react";

const CheckInForm = ({ setOpenModal, user_id, beer_id, createCheckIn, update, setUpdate }) => {
    const [counter, setCounter] = useState(255)

    const [checkIn, setCheckIn] = useState({
        user_id,
        beer_id,
        review: ""
    })

    const handleText = (e)=>{
        const handleCheckIn = Object.assign({}, checkIn)
        handleCheckIn["review"] = e.currentTarget.value

        setCounter(255-e.currentTarget.value.length)
        setCheckIn(handleCheckIn)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        createCheckIn(checkIn)
        setOpenModal(false)
        setUpdate(!update)
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
                        <textarea onChange={handleText} placeholder="What did you think?"></textarea>
                        <p className="counter">{counter}</p>
                    </div>

                        <button onClick={handleSubmit} className='form-submit'>Confirm</button>

                </form>
            </div>
        </div>
    )
}

export default CheckInForm