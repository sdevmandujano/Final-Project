import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import dashboardRoutes from "../../routes/dashboard.jsx";


export default class Facebook extends Component {
    //initial state
    state = {
        isLoggedIn: true,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response =>{
       // console.log(response)
       this.setState({
        isLoggedIn:true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
       });
    }
    componentClicked = () => console.log("This is clicked!")

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent= (
                <div style ={{
                    width: '100px',
                    margin:'auto',
                    borderTopLeftRadius:'30px',
                    borderTopRightRadius:'20px',
                    background: '#f4f4f4',
                    padding: '20px',
                    alignContent: 'right'
                }}>

                <img src={this.state.picture} alt={this.state.name}/>
                <h2>Welcome {this.state.name}</h2>
                </div>
            )
        }
        else {
            fbContent = (
                <FacebookLogin
                    appId="528083504331828"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} 
                />
            );
        }

        return (
            <div> {fbContent}</div>
        )
    }
}
