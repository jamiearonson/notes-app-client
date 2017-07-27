import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Home from "./scenes/Home/index";
import Login from "./scenes/Login/index";
import Signup from "./scenes/Signup/index";
import NotFound from "./scenes/NotFound/index";
import NewNote from "./scenes/NewNote/index";
import Notes from "./scenes/Notes/index";

export default ({ childProps }) =>
	<Switch>
		<AppliedRoute path="/" exact component={Home} props={childProps} />
		<UnauthenticatedRoute
			path="/login"
			exact
			component={Login}
			props={childProps}
		/>
		<UnauthenticatedRoute
			path="/signup"
			exact
			component={Signup}
			props={childProps}
		/>
		<AuthenticatedRoute
			path="/notes/new"
			exact
			component={NewNote}
			props={childProps}
		/>
		<AuthenticatedRoute
			path="/notes/:id"
			exact
			component={Notes}
			props={childProps}
		/>
		<Route component={NotFound} />
	</Switch>;
