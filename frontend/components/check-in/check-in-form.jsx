import React, { useState, useEffect } from "react";

const CheckInForm = ({setOpenModal}) => {
    return (
        <div className="modal-outer" onClick={()=>setOpenModal(false)}>
            <form className="modal-form" onClick={(e)=>e.stopPropagation()}>
                <h1>hello</h1>
            </form>
        </div>
    )
}

export default CheckInForm