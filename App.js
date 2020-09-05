import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"; 

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/contact">
            <Header />
            <h1>Contactt</h1>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/*  This is the default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /*need react-router */
}

{
  /* localhost.com */
}
{
  /* localhost.com/checkout */
}
{
  /* localhost.com/login */
}

export default App;
