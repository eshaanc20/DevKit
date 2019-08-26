import React, {Component} from 'react';
import axios from 'axios';
import Search from './Search';
import TopBar from './TopBar';
import Filter from './Filter';

class Homepage extends Component{
  constructor(props){
    super(props);
    this.APIList = null
  }

  state = {
    response:false
  }

  //Getting APIList from the backend
  componentDidMount() {
    axios.get('http://localhost:9000/APIList')
      .then((res) => {
        this.APIList=res.data;
        this.setState({
          response:true
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
        <div className="flex-containter" style={{width:'100%'}}>
          <div>
        <Filter/>
        </div>
        <div style={{width:'100%'}}>
        {this.APIList!=null? <Search cardInfos={this.APIList} />:null}
        </div>
      </div>
    </div>
    )
  }
}

export default Homepage;