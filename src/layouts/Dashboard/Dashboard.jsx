import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NotificationSystem from "react-notification-system";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import { style } from "../../variables/Variables.jsx";

import dashboardRoutes from "../../routes/dashboard.jsx";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log("passing user " + this.props.email)
    this.state = {
      user: this.props.user,
      _notificationSystem: null
    };
  }
  
  componentDidMount() {
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem;
    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          Bienvenido <b>/Yell</b> - esports spot.
        </div>
      ),
      level: "success",
      position: "tc",
      autoDismiss: 15
    });
  }

  render() {
    return (
      <div className="wrapper">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Sidebar {...this.props} />
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Switch>
            {dashboardRoutes.map((prop, key) => {
              return (
                  <Route
                    exact path={prop.path}
                    key={key}
                    render={routeProps => (
                      <prop.component
                        {...routeProps} email={this.props.email}
                        handleClick={this.handleNotificationClick}
                      />
                    )}
                  />
              );
            })}
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
