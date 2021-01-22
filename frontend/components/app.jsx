import React from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Route} from 'react-router-dom';
import Splash from "./splash";


import  SignIn  from '../components/session_form/sign_in_form_container'
import  SignUp  from '../components/session_form/sign_up_form_container'


const App = () => (
  <div>
      <AuthRoute exact path="/login" component={SignIn}/>
      <AuthRoute exact path="/signup" component={SignUp}/>
      <Route exact path="/" component={Splash} />
      <Route exact path="/users" component={Splash} />
  </div>
);

export default App;