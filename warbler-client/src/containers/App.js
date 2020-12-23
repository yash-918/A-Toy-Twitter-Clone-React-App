import React,{Component} from "react";
import {Provider} from "react-redux";
import {configureStore } from "../store/index.js";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar.js";
import Main from "./Main.js";
import thunk from "redux-thunk";
// import { createStore } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../store/reducers/index.js"

const store = createStore(
  rootReducer,
    applyMiddleware(thunk)
);

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
