import React, {Component} from 'react';
import axios from 'axios';
import ResultCard from './Components/ResultCard';
import Search from './Components/Search';

class App extends Component{
  constructor(props){
    super(props);
    this.APIList = null
  }

  state = {
    request:false
  }

  componentDidMount() {
    axios.get('http://localhost:9000/APIList')
      .then((res) => {
        this.APIList=res.data;
        this.setState({
          request:true
        });

      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    console.log(this.APIList)
    return(
      <div>
        {this.APIList!=null? <Search cardInfos={this.APIList} />:null}
      </div>
    )
  }
}

export default App;
