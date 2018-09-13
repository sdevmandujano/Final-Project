import React from "react";
import Jumbotron from "../../components/Jumbotron"
import Facebook from '../../components/Facebook/Facebook'

class Landing extends React.Component {
  render() {
 
    return (
      <div>
      <Jumbotron className="masthead">
      <div className="overlay"></div>
      <div className="container">      
          <div className="row">
          <div className="col-xl-9 mx-auto">
            <img src="https://images.pexels.com/photos/929831/pexels-photo-929831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="100" width="100"/>
            <h1 className="mb-5">Yell</h1>
          </div>
          <Facebook />
        </div>
      </div>
      </Jumbotron>

      <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className="icon-screen-desktop m-auto text-primary"></i>
              </div>
              <h3>Arma tu perfil</h3>
              <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className="icon-layers m-auto text-primary"></i>
              </div>
              <h3>Recluta</h3>
              <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className="icon-check m-auto text-primary"></i>
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
