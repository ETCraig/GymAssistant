import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import jwt_decode from 'jwt-decode';
import { clearCurrentUser } from './actions/userActions';
import { Provider } from 'react-redux';
import SecureRoute from './resources/SecureRoute';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import store from './store';

//Components
import Goals from './Components/GoalsModel';
import Landing from './Components/Landing';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Register from './Components/Register';
import REPcalc from './Components/repCalculator';
import BMIcalc from './Components/bmiCalculator';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 3000;

  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentUser());
    this.props.history.push('/Login');
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
              <Route path='/' exact component={Landing} />
              <Route path='/Login' exact component={Login} />
              <Route path='/Register' exact component={Register} />
              <Switch>
                <SecureRoute path='/Goals' exact component={Goals} />
                <SecureRoute path='/REP-Calculator' exact component={REPcalc} />
                <SecureRoute path='/BMI-Calculator' exact component={BMIcalc} />
              </Switch>
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;