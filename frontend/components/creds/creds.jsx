import React from "react";
import {Link} from 'react-router-dom'

const Creds = ({ currentUser, logout }) =>{

    const sessionLinks = () => (
    <div className ='creds'>
        <Link to="/login" className="sign-in-link creds-link"><button>Sign In</button></Link>
        <Link to="/signup" className="sign-up-link creds-link"><button>Create an Account</button></Link>
    </div>
  );
  const personalGreeting = () => (
    <hgroup className="creds-link creds">
      <button onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
  }

export default Creds