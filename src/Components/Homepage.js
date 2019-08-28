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
        <h1 className="mainTitle" style={{ marginLeft:'-10px'}}>DevKit.</h1>
        <h3 className="subTitle" style={{marginTop:'10px'}}>Search for your favourite Software Tools with</h3>
        {/*https://www.npmjs.com/package/react-typing-effect*/}
        <ReactTypingEffect className="subTitle" style={{fontWeight:'400', paddingTop:'20px', cursor:'text'}} speed='100' eraseDelay="4000"
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