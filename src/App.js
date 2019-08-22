import React, {Component} from 'react';
import axios from 'axios';
import Add from './Components/Add.js';

class App extends Component{
  state = {
    response: null
  }

  componentDidMount() {
    axios.get('http://localhost:9000/APIList')
      .then(res => {
        this.setState({
          response: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return(
      <div>
        <Add/>
        {this.state.response}
      </div>
    )
  }
}

export default App;
