import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Volunteer from './Pages/Volunteer';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Blog}/>
          <Route path='/about' component={About}/>
          <Route path='/volunteer' component={Volunteer}/>
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
