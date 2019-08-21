import React, {Component} from 'react';
import axios from 'axios';
import ResultCard from './Components/ResultCard';
import Search from './Components/Search';

class App extends Component{
  state = {
    APIS:[
      {
        title:"Title 1",
        link:"google.com"
      },
      {
        title:"Title 2",
        link:"yahoo.com"
      },
      {
        title:"Title 3",
        link:"amazon.com"
      },
      {
        title:"Title 4",
        link:"github.com"
      },
    ],
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
        <Search cardInfos={this.state.searchButton}/>
        <ResultCard cardInfos={this.state.APIS}/>
      </div>
    )
  }
}

export default App;
