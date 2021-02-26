import React from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import Splash from "./splash";
import Home from './home/home'
import UserContainer from './user/user'
import NewBeerContainer from './beer/new_beer_container'
import BeerIndexContainer from './beer/beer_index_container'
import BeerContainer from './beer/beer_container'
import Footer from './footer/footer'



import SignIn from '../components/session_form/sign_in_form_container'
import SignUp from '../components/session_form/sign_up_form_container'
import NavBarContainer from './navbar/navbar_container'


const App = () => {
  return (

    <div className="app-container">

        <AuthRoute exact path="/login" component={SignIn} />
        <AuthRoute exact path="/signup" component={SignUp} />
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute path="/" component={NavBarContainer} />
        <ProtectedRoute exact path="/home" component={Home} />
        <ProtectedRoute exact path="/user/:userId" component={UserContainer} />
        <ProtectedRoute exact path="/beer/:beerId" component={BeerContainer} />
        <ProtectedRoute exact path="/newbeer" component={NewBeerContainer} />
        <ProtectedRoute exact path="/beers"  component={BeerIndexContainer} />
        <Route path="/"  component={Footer} />

    </div>
  )
};

export default App;