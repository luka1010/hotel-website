import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Activities from "./pages/Activities";
import SingleActivity from "./pages/SingleActivity";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/activities/" component={Activities} />
        <Route exact path="/activities/:url" component={SingleActivity} />
        <Route exact path="/login/" component={Login} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
