import React from "react";
import { Switch, Route } from "react-router-dom";

import RequireAuth from "./auth/RequireAuth";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Signup from "./auth/Signup";
import SignupDone from "./auth/SignupDone";
import AccountActivation from "./auth/AccountActivation";
import PasswordChange from "./auth/PasswordChange";
import PasswordReset from "./auth/PasswordReset";
import PasswordResetDone from "./auth/PasswordResetDone";
import PasswordResetConfirm from "./auth/PasswordResetConfirm";
import NoMatch from "./NoMatch";
import HomePage from "./HomePage/HomePage";


import "./MainContent.css";
// import Profo from "./profo";




const MainContent = () => (
  <div className="MainDiv">

    <div className="MainComponents">
      <Switch>
        <Route exact path="/" component={RequireAuth(HomePage)} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={Signup} />
        <Route
          path="/account-confirm-email/:key"
          component={AccountActivation}
        />
        <Route path="/signup_done" component={SignupDone} />
        <Route path="/reset_password" component={PasswordReset} />
        <Route path="/reset_password_done" component={PasswordResetDone} />
        <Route
          path="/reset_password_confirm/:uid/:token/"
          component={PasswordResetConfirm}
        />
        <Route
          path="/change_password"
          component={RequireAuth(PasswordChange)}
        />

        <Route component={NoMatch} />

      </Switch>
    </div>
  </div>
);

export default MainContent;
