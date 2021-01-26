import CredsContainer from './creds/creds_container';
import React from "react";


class Splash extends React.Component{
    render(){
        return(
            <div >  
                <img className = 'background-img' src={window.bg} alt="" />
                <CredsContainer/>     
            </div>
        )
    }
}

export default Splash