import React, { useState } from "react";
import {connect} from "react-redux"
import {updateUser} from "../../../actions/user_actions"

const ImageForm = ({setOpenModal, updateUser, currentUser}) => {

    const [image, setimage] = useState({photoFile: null})

    const fileInput = document.getElementById("file-upload-hidden")
    
    const closeModal = () =>{
        fileInput.value = null
        setOpenModal(false)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('user[id]', currentUser.id)
        formData.append('user[photo]', fileInput.files[0])
        updateUser(formData)
        .then(()=>closeModal())
    }
    return (
        <div className="modal-outer" onClick={closeModal}>
            <div className="modal-form-container" onClick={(e) => e.stopPropagation()}>
                <div className="check-in-top">
                    <p>Check-In</p>
                    <p onClick={closeModal}>&times;</p>
                </div>
                <form className="modal-form">

                    <div className="review-container">
                        <textarea  placeholder="What did you think?" maxLength="255"></textarea>
                        <p className="counter">{}</p>
                    </div>
                    <div className="slide-container">
                        <input  type="range" min="0" max="5" defaultValue="0" className="slider" id="slider" />
                        <div>{}</div>
                    </div>
                    <button onClick={handleSubmit} className='form-submit'>Confirm</button>

                </form>
            </div>
        </div>
    )
}

const mSTP = ({entities:{users}, session}) =>({
    currentUser: users[session.id]
})
const mDTP = dispatch =>({
    updateUser: user => dispatch(updateUser(user))
})

export default connect(mSTP, mDTP)(ImageForm)