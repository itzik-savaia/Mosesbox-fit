import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

// Layouts
import HomeApp from './layouts/home/homeApp';
import LoginApp from './layouts/login/loginApp';


const App = () => {

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/login"><LoginApp /></Route>
            {/* <Route path="/singup"><SingupApp /></Route>
            <Route path="/forgot"><ForgotApp /></Route> */}
            <Route exact path="/"><HomeApp /></Route>
          </Switch>


          {/* <nav>
            <div className="menu-bar">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="L_link">
                  <b>ראשי</b>
                </div>
              </Link>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <div className="L_link">
                  <b>כניסה</b>
                </div>
              </Link>
            </div>
          </nav> */}
          <div className="menu-bar itzik">
            <div>
              פיתוח ע"י -
                  <a href="https://www.facebook.com/itzik.savaia.14/">איציק </a>
            </div>
          </div>
        </div>
      </Router >
    </>
  );
}

export default App;