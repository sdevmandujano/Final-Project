import React from "react";
import Jumbotron from "../../components/Jumbotron"
import Facebook from '../../components/Facebook/Facebook'
import './Landing.css'
import Yell_Logo from '../../assets/img/Yell-07.png'
import GoogleLoginApp from "../../components/Google/google";



class Landing extends React.Component {
  render() {
    return (
      <div>
        <div style={{
          width: '60',
          height: '30',
          marginRight: '20px',
          marginLeft: '20px',
          padding: '1px',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          backgroundImage: 'url("https://cdn-images-1.medium.com/max/2000/1*T_7hXP9VnNM8B9TdCFMCiQ.jpeg")',
          backgroundSize: 'cover',
          backgroundRepeat: "no-repeat"
        }}>

          <Jumbotron className="masthead">
            <div className="container text-center">
              <div className="row">
                <div className="col-sm-10 col-md-5 col-lg-6 mx-auto">
                  <div className="align-left">
                    <img src={Yell_Logo} alt="logo" width="100%" height="100%"></img>
                  </div>
                </div>
                <div className="col-sm-7 col-md-8 col-lg-5 mx-auto">
                  <div className="card card-signin my-5">
                    <div className="card-body">
                      <h5 className="card-title text-center">Iniciar Sesión</h5>
                      <form className="form-signin">
                        <GoogleLoginApp />
                        <br/>
                        <Facebook/>
                        <hr /> O <hr />
                        <div className="form-label-group">
                          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                          <label>Correo Electrónico</label>
                        </div>
                        <div className="form-label-group">
                          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                          <label>Contraseña</label>
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                          <input type="checkbox" className="custom-control-input" id="customCheck1" />
                          <label className="custom-control-label">Guardar contraseña</label>
                        </div>
                        <button className="btn btn-lg btn-primary bg-secondary text-light btn-block text-uppercase" type="submit">Registrarte</button>
                        <div className="m-2">
                          <p className="small">Al registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies.</p>
                        </div>
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
                  <p className="lead mb-0">Crea tu perfil con los juegos de tu preferencia!</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon mx-auto">
                    <i className="fas fa-users fa-4x"></i>
                  </div>
                  <h3>Recluta</h3>
                  <p className="lead mb-0">Busca y encuentra a los jugadores necesarios para completar tu equipo!</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon mx-auto">
                    <i className="far fa-check-circle fa-4x"></i>
                  </div>
                  <h3>Evalúa</h3>
                  <p className="lead mb-0">Califica a los miembros de tu equipo!</p>
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
