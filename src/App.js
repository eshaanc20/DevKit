import React, {Component} from 'react';
import axios from 'axios';

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
        {this.state.response}
      </div>
    )
  }
}

export default App;
