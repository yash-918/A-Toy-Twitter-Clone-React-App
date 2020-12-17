import React from "react";
import {Switch,withRouter,Route,Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage.js";

const Main=props=>{
    // console.log(Homepage);
    return(
        <div className="container">
            <Switch>
                <Route exact path="/" render={(props) => <Homepage {...props}/>}/>
            </Switch>
        </div>
    );
};

function mapStateToProps(state)
{
    return(
        {
        currentUser:state.currentUser
        }
    );
};

export default withRouter(connect(mapStateToProps)(Main));