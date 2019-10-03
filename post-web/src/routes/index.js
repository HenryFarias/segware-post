import React from "react";
import {Router, Switch} from "react-router-dom";

import Route from "./Route";

import Signin from "../pages/Auth/Signin";
import Posts from "../pages/Posts";
import Users from "../pages/Users";

export default function Routes(props) {
  return (
    <Router history={props.history}>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/posts" component={Posts} isPrivate />
        <Route path="/users" component={Users} isPrivate />
      </Switch>
    </Router>
  );
}
