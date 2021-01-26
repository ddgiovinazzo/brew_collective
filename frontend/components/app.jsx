import React from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Route} from 'react-router-dom';
import Splash from "./splash";
import Home from './home/home'
import UserContainer from './user/user'
import NewBeerContainer from './beer/new_beer_container'


import  SignIn  from '../components/session_form/sign_in_form_container'
import  SignUp  from '../components/session_form/sign_up_form_container'
import NavBarContainer from './navbar/navbar_container'
                    


const App = () => (
  <div id='main-background'>

    <NavBarContainer />




      <AuthRoute exact path="/login" component={SignIn}/>
      <AuthRoute exact path="/signup" component={SignUp}/>
      <ProtectedRoute exact path="/home" component={Home}/>
      <ProtectedRoute exact path="/user/:userId" component={UserContainer}/>
      <ProtectedRoute exact path="/beer/new" component={NewBeerContainer}/>
      <AuthRoute exact path="/" component={Splash} />
  </div>
);

export default App;