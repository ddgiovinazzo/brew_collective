import React, { useState } from "react";
import {connect} from "react-redux"
import {updateUser} from "../../actions/user_actions"
// import ImageForm from "./image_form/image_form";

const SetImg = ({ src, dft, alt, className, currentUser, updateUser }) => {
    const addDefaultSrc = (e) => e.target.src = dft

    // const [openModal, setOpenModal] = useState(false)
    
    const imageClick = () =>{
        const fileInput = document.getElementById("file-upload-hidden")
        fileInput.click()
    }
    const handleSubmit = (e) =>{
        const fileInput = document.getElementById("file-upload-hidden")
        e.preventDefault()
        const formData = new FormData()
        formData.append('user[id]', currentUser.id)
        formData.append('user[photo]', fileInput.files[0])
        updateUser(formData)
        .then(()=>fileInput.value = null)
    }

    return (

        <div>
            <div onClick={imageClick} className='btn btn-primary tooltip change'>
                < img className={className} onError={addDefaultSrc} src={src} alt={alt} />
                <div className="top user">
                    <p>Change Profile Picture<i></i></p>
                </div>
                <input onChange={handleSubmit} 
                    id="file-upload-hidden" 
                    type="file"
                    accept="image/*"
                />
            </div>
            {/* {openModal ? <ImageForm setOpenModal={setOpenModal} /> : null} */}
        </div>

    )
}

const mSTP = ({entities:{users}, session}) =>({
    currentUser: users[session.id]
})
const mDTP = dispatch =>({
    updateUser: user => dispatch(updateUser(user))
})

export default connect(mSTP, mDTP)(SetImg)