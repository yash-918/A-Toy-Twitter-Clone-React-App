import React from "react";
import {Provider} from "react-redux";
import {configureStore } from "../store/index.js";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar.js";
import Main from "./Main.js";
import {setAuthorizationToken,setCurrentUser} from "../store/actions/auth.js";
import jwtDecode from "jwt-decode";

const store = configureStore();

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (error) {
    store.dispatch(setCurrentUser({}));
  }
}

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
