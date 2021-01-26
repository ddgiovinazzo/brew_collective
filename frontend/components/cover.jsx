import React from "react";
import { Link } from 'react-router-dom'

class Cover extends React.Component {

    render() {
        return (
        <div id='show-img-container'> 
            <img id='show-img' src={window.show} alt=""/>
        </div>
        )
    }
}

export default Cover