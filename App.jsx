import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AndroidSmall1 from "./components/AndroidSmall1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|android-small-1)">
          <AndroidSmall1 frame="/img/frame-1@2x.png" spanText="PRICECHAIN" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
