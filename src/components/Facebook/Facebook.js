import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import '../../views/Landing/Landing.css'
import  { Link, Redirect } from 'react-router-dom'
import api from "../../utils/DatabaseRoutes"
import Dashboard from "../../layouts/Dashboard/Dashboard"
import Landing from '../../views/Landing/Landing';

export default class Facebook extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: this.props.login,
            userID: '',
            name: '',
            email: '',
            picture: '',
            user:this.props.user,
        }
    }
   

    responseFacebook = response => {
        console.log("This is the response from FB: ")
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
             api.getUserId(this.state.email).then(res => {
                console.log("Response with userId " + res.data);
                <Link path="/" component={Landing}/>
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
