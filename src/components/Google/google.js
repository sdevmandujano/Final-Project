import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
// or
import { GoogleLogin } from 'react-google-login';


export default class Google extends Component {
  GContent = (
    <GoogleLogin
      clientId="9197549532-7lebdm1nnsm2fv18jmlgvgqqtcg58d0r.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    /> 
  )

  return(
  
  )

}