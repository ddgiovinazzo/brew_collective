import React, { useState } from "react";
import ImageForm from "./image_form/image_form";

const SetImg = ({ src, dft, alt, className }) => {
    const addDefaultSrc = (e) => e.target.src = dft

    const [openModal, setOpenModal] = useState(false)

    const imageClick = () =>{
        const fileInput = document.getElementById("file-upload-hidden")
        fileInput.click()
    }
    

    return (

        <div>
            <div onClick={imageClick} className='btn btn-primary tooltip change'>
                < img className={className} onError={addDefaultSrc} src={src} alt={alt} />
                <div className="top user">
                    <p>Change Image<i></i></p>
                </div>
                <input onChange={() => setOpenModal(true)} 
                    id="file-upload-hidden" 
                    type="file"
                    accept="image/*"
                />
            </div>
            {openModal ? <ImageForm setOpenModal={setOpenModal} /> : null}
        </div>

    )
}

export default SetImg