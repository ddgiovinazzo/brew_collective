import React, {useState} from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import Splash from "./splash";
import HomeContainer from './home/home_container'
import UserShowContainer from './user/show/user_show_container'
import BeerCreateContainer from './beer/create/beer_create_container'
import BeerIndexContainer from './beer/beer_index/beer_index_container'
import BeerShowContainer from './beer/beer_show/beer_show_container'
import UserBeersContainer from './user/beers/user_beers_container'
import UserFriendsContainer from './user/friends/user_friends_container'
import BreweryShowContainer from './brewery/show/brewery_show_container'
import Footer from './footer/footer'

import SignIn from '../components/session_form/sign_in_form_container'
import SignUp from '../components/session_form/sign_up_form_container'
import NavBarContainer from './navbar/navbar_container'

const App = () => {

  const [searchText, setSearchText] = useState("")
  const navSearchProps=[{searchText}, {setSearchText}]

  const onMouseDown = () =>{
    if(searchText) setSearchText(null)
  }

  const onKeyDown = (e) =>{
    if(searchText && e.key === "Escape") setSearchText(null)
  }

  return (

    <div onKeyDown={onKeyDown} onMouseDown={onMouseDown}className="app-container">

        <AuthRoute exact path="/login" component={SignIn} />
        <AuthRoute exact path="/signup" component={SignUp} />
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute path="/" component={NavBarContainer} newProps={navSearchProps}/>
        <ProtectedRoute exact path="/home" component={HomeContainer} />
        <ProtectedRoute exact path="/user/:userId" component={UserShowContainer} />
        <ProtectedRoute exact path="/beer/:beerId" component={BeerShowContainer} />
        <ProtectedRoute exact path="/brewery/:breweryId" component={BreweryShowContainer} />
        <ProtectedRoute exact path="/newbeer" component={BeerCreateContainer} />
        <ProtectedRoute exact path="/beers"  component={BeerIndexContainer} />
        <ProtectedRoute exact path="/user/:userId/beers"  component={UserBeersContainer} />
        <ProtectedRoute exact path="/user/:userId/friends"  component={UserFriendsContainer} />
        <Route path="/"  component={Footer} />

    </div>
  )
};

export default App