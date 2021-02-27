import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import CardList from "./Trainer-card/CardList"
import Profile from "./Profile-Card/Profile-card"

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Route path="/" exact component={CardList}></Route>
        <Route path="/profile/:id" exact component={Profile}></Route>
      </BrowserRouter>
     
</div>
  );
}

export default App;
