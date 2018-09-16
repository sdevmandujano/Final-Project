import React from "react";
import Jumbotron from "../../components/Jumbotron"
import Facebook from '../../components/Facebook/Facebook'
import  './Landing.css'
import Yell_Logo from '../../assets/img/yell-logo.png'

class Landing extends React.Component {
  render() {
 
    return (
      <div>
        <div style ={{
                    width: '70',
                    height:'100%',
                    margin:'auto',
                    marginRight:'20px',
                    marginLeft:'20px',
                    padding: '90px',
                    borderBottomLeftRadius:'20px',
                    borderBottomRightRadius:'20px',
                    backgroundImage:'url("https://images.pexels.com/photos/929831/pexels-photo-929831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
          }}>
                
          <Jumbotron>
            <div className="containerjumbo text-center"> 
              <div className="row">
                    <div className="col-sm-10 col-md-5 col-lg-6 mx-auto">
                    <img className="landingImg"src={Yell_Logo}></img>
                    </div>
                    <div className="col-sm-7 col-md-8 col-lg-5 mx-auto">
                      <div className="card card-signin my-5">
                        <div className="card-body">
                          <h5 className="card-title text-center">Sign In</h5>
                          <form className="form-signin">
                            <div className="form-label-group">
                              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                              <label for="inputEmail">Email address</label>
                            </div>
                            <div className="form-label-group">
                              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                              <label for="inputPassword">Password</label>
                            </div>

                            <div className="custom-control custom-checkbox mb-3">
                              <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                              <label className="custom-control-label" for="customCheck1">Remember password</label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                            <button className="btn btn-lg btn-google-1 btn-block text-uppercase bg-danger text-light" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                            <button className="btn btn-lg btn-facebook-1 btn-block text-uppercase bg-primary text-light" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </Jumbotron>
        </div>
      <section className="bg-light text-center mx-auto">
      <div className="container mx-auto mt-3">
        <div className="row">
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon mx-auto">
                <i className="fas fa-user-alt fa-4x"></i>
              </div>
              <h3>Arma tu perfil</h3>
              <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon mx-auto">
              <i class="fas fa-users fa-4x"></i>
              </div>
              <h3>Recluta</h3>
              <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
              <div className="features-icons-icon mx-auto">
              <i class="far fa-check-circle fa-4x"></i>
              </div>
              <h3>Evalua</h3>
              <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    );
  }
}

export default Landing;
