import React, {Component} from 'react';
import axios from 'axios';
import Search from './Search';
import TopBar from './TopBar';
import landingImg from './img/devkit-landing.png';
import ReactTypingEffect from 'react-typing-effect';


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
        
        <div style={{margin:'auto', flexWrap:'wrap',flexDirection: 'row' , display:'flex', maxWidth:'1200px'}}>
         <div >
        <h1 style={{fontSize:'190px', fontFamily:'Avenir', fontWeight:'900', height:'200px'}}>DevKit.</h1>
        <h3 style={{fontSize:'25px', fontFamily:'HelveticaNeue', fontWeight:'500', paddingTop:'10px'}} >Search for your favourite Software Tools with</h3>
        <h3 style={{fontSize:'25px', fontFamily:'HelveticaNeue', fontWeight:'500', paddingTop:'0px'}}>over 1000 APIs</h3>
         </div>
         <div style={{maxWidth:'500px'}}>
        <img src={landingImg} style={{maxWidth:'500px'}} alt=""></img>
         </div>
        </div>

        {this.APIList!=null? <Search cardInfos={this.APIList} />:null}
      </div>
    )
  }
}

export default Homepage;