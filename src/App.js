import React, {Component} from 'react';
import axios from 'axios';
import Search from './Components/Search';
import TopBar from './Components/TopBar'
import Add from './Components/Add.js';

class App extends Component{
  constructor(props){
    super(props);
    this.APIList = null
  }

  state = {
    request:false
  }

  //Getting APIList from the backend
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
    return(
      <div>
        <TopBar/>
        {this.APIList!=null? <Search cardInfos={this.APIList} />:null}
        <Add/>
        {this.state.response}
      </div>
    )
  }
}

export default App;
