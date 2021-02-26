import CredsContainer from './creds/creds_container';
import React from "react";


class Splash extends React.Component {
    render() {
        return (
            
            
            <div className="splash-container">
                {/* <img className='background-img' src={window.bg} alt="" /> */}
                
                    <CredsContainer />

                    <span id='brew_collective-logo-container-splash-1'>
                        <img className ="brew-collective-logo-splash"  src={window.brew_collective} alt="" />
                    </span>
                    <span id='brew_collective-logo-container-splash-2'>
                        <span className="splash-text"><h1 >Discover and share your<br/>favorite beer.</h1></span>
                    </span>              
            </div>
            
        )
    }
}

export default Splash