import React from "react";

const Img = ({src, dft, alt, className})=>{
    const addDefaultSrc = (e)=> e.target.src = dft
    
    return <img className={className} onError={addDefaultSrc} src={src} alt={alt}/>
}

export default Img