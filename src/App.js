import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Homepage from './Components/Homepage.js';
import Settings from './Components/Settings.js';

class App extends Component{
  render() {
    return(
      <BrowserRouter>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/settings' component={Settings}/>
      </BrowserRouter>
    )
  }
}

export default App;
