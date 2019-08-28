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
        
        <div style={{margin:'auto',marginTop:'10%', flexWrap:'wrap',flexDirection: 'row' , display:'flex', maxWidth:'1200px'}}>
         <div >
        <h1 style={{fontSize:'190px', fontFamily:'Avenir', fontWeight:'900', height:'200px'}}>DevKit.</h1>
        <h3 style={{fontSize:'25px', fontFamily:'HelveticaNeue', fontWeight:'500', paddingTop:'10px'}} >Search for your favourite Software Tools with</h3>
        {/*https://www.npmjs.com/package/react-typing-effect*/}
        <ReactTypingEffect style={{fontSize:'25px', fontFamily:'HelveticaNeue', fontWeight:'700', paddingTop:'0px', cursor:'text'}} speed='100' eraseDelay="4000"
         text={['1604 Tools',"1462 APIs", "232 Libraries", '94 Frameworks']}
       />
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