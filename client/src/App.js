import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Volunteer from './Pages/Volunteer';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Blog}/>
          <Route path='/about' component={About}/>
          <Route path='/volunteer' component={Volunteer}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
