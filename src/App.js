import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Homepage from './Components/Homepage.js';
import Requests from './Components/Requests.js';

class App extends Component{
  render() {
    return(
      <BrowserRouter>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/settings' component={Requests}/>
      </BrowserRouter>a
    )
  }
}

export default App;
