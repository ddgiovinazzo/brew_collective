import CredsContainer from './creds/creds_container';
import React from "react";


class Splash extends React.Component{
    render(){
        return(
            <div className = 'splash-background'>  
                <CredsContainer/>     
            </div>
        )
    }
}

export default Splash