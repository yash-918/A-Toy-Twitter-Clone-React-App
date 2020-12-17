import React,{Component} from "react";
import {Provider} from "react-redux";
import {configureStore } from "../store/index.js";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar.js";
import Main from "./Main.js";

const store=configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar/>
        <Main/>
      </div>
    </Router>
  </Provider>
);
export default App;
