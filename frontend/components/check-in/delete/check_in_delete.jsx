import React from "react";

const CheckInDelete = (props) => {
    const { setOpenModal, checkIn, deleteCheckIn } = props


    const handleSubmit = (e) => {
        e.preventDefault()
        deleteCheckIn(checkIn.id)
            .then(() => setOpenModal(false))
    }

    return (
        <div className="modal-outer" onClick={() => setOpenModal(false)}>
            <div className="modal-form-container" onClick={(e) => e.stopPropagation()}>
                <div className="check-in-top">
                    <p>Delete Check-In</p>
                </div>
                <form className="modal-form">
                    <h2>Are you sure you want to delete this check-in?</h2>
                    <div className='cid-button-container'>
                        <button onClick={handleSubmit} className='form-submit cid-button'>Yes</button>
                        <button onClick={() => setOpenModal(false)} className='form-submit cid-button'>No</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default CheckInDelete