import CredsContainer from './creds/creds_container';
import React from "react";


class Splash extends React.Component{
    render(){
        return(
            <div className = 'background-img'>
                <div className = 'darken-background'>
                <CredsContainer/>     
                </div>
            </div>
        )
    }
}

export default Splash