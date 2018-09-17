import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import FontAwesome from 'react-fontawesome';

class GoogleLoginApp extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  responseGoogle(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();

    console.log({ googleId });
    console.log({ accessToken: id_token });
    //anything else you want to do(save to localStorage)...
  }

  render() {
    return (
      <div>
        <GoogleLogin socialId="9197549532-tike5msii3reu9ttp5nvhj3ei1k6couj.apps.googleusercontent.com"
          className="google-login"
          scope="profile"
          fetchBasicProfile={false}
          responseHandler={this.responseGoogle}
          buttonText=" Iniciar sesión con Google"
          className="btn btn-lg btn-google-1 btn-block text-uppercase bg-danger text-light"
          >
        <FontAwesome
          name='google'
        />
      </GoogleLogin>

      </div>
    );
  }

}

export default GoogleLoginApp;