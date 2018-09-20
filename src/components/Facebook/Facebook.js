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

    componentClicked = () => {
        console.log("This is clicked!")

    }

    render() {
        let fbContent;
        //To send user to the main page after login
        if (this.state.isLoggedIn) {
            console.log("User is redirected"); 
            api.getUser(this.state.email).then(res => {
                console.log(res)
                //if user exist, do not create the user
                //return -1 or userID

                //if user is not in DB, save the user saveUser (data) where data has email & picture
                //return -1 or userID

            })  
            fbContent = (
                <Redirect to='/user/profile/:Id'  />
            );
        }
        else {
            fbContent = (
                <FacebookLogin
                    appId="528083504331828"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.props.responseFacebook}
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
