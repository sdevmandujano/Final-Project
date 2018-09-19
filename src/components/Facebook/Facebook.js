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
            console.log("User is logged in"); 
             api.getUser(this.state.email).then(res => {
                console.log("Response with userId" + res.data);
                let pathy=`/user/profile/${res.data}`;
                console.log(pathy);
                //<Route path="/profile/:userId" render={({ match }) => (
                //<Redirect to:{`/user/profile/${res.data}`} />
                //)} />
            }); 
            
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
