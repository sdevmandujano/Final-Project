import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import '../../views/Landing/Landing.css'
import  { Redirect } from 'react-router-dom'
import api from "../../utils/DatabaseRoutes"

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
        console.log("This is the response from FB: ")
        console.log(response)
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
       
        }
        else {
            fbContent = (
                <FacebookLogin
                    appId="528083504331828"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.props.responseFacebook}
                    cssClass="btn btn-lg btn-block text-uppercase bg-primary text-light"
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
