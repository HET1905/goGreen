import React,{Component} from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Route,Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import MainImg from "./components/MainImg";
import About from "./components/About";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <BrowserRouter> */}
            <Switch>
            <Route exact path="/" component={MainImg} />
            <Route exact path="/about" component={About} />
            </Switch>
        {/* </BrowserRouter> */}
       
      </div>
    );
  }
}

export default App;
