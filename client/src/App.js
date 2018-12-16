import React, { Component } from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decoded from 'jwt-decode';
import {clearCurrentUser} from './actions/userActions';
import NavBar from './Components/NavBar';
import {Provider} from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authctions';
import store from './store';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decoded(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 3000;

  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Container>
              
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
