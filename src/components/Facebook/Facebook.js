import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import '../../views/Landing/Landing.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
//import NoMatch from "../../views/NoMatch/NoMatch";
import UserProfile from "../../views/UserProfile/UserProfile"

export default class Facebook extends Component {
    //initial state
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
        // console.log(response)
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    }
    componentClicked = () => {
        console.log("This is clicked!")

    }

    render() {
        let fbContent;
        //To send user to the main page after login
        if (this.state.isLoggedIn) {
            console.log("User is redirected");
            fbContent= (
                
            <Router>
                <div id="App">
                    <Route path="/user/profile" component={UserProfile} />
                </div>
            </Router>
            )
        }
        else {
            fbContent = (
                <FacebookLogin
                    appId="528083504331828"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    cssClass="btn btn-lg btn-facebook-1 btn-block text-uppercase bg-primary text-light"
                    icon="fab fa-facebook-f mr-2"
                    textButton="Iniciar sesión con Facebook"
                />
            );
        }

        return (
            <div> {fbContent}</div>
        )
    }
}
