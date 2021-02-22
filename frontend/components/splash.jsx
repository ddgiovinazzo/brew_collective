import CredsContainer from './creds/creds_container';
import React from "react";


class Splash extends React.Component {
    render() {
        return (
            <div>
                <img className='background-img' src={window.bg} alt="" />
                <div className="splash-container">
                    <CredsContainer />

                    <span id='brew_collective-logo-container-splash'>
                        <img className ="brew-collective-logo-splash"  src={window.brew_collective} alt="" />
                    </span>
                        <span className="splash-text"><h1 >Discover and share your<br/>favorite beer.</h1></span>
                </div>

            </div>
        )
    }
}

export default Splash