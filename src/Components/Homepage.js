import React, {Component} from 'react';
import axios from 'axios';
import Search from './Search';
import TopBar from './TopBar';
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
    var frameworkCount=0,libCount=0, apiCount=0,i;
    if (this.APIList!=null){
      for (i = 0; i < this.APIList.length; i++) { 
        if (this.APIList[i].type === "Framework"){frameworkCount+=1}
        if (this.APIList[i].type === "Library"){libCount+=1}
        if (this.APIList[i].type === "API"){apiCount+=1}
      }
    }

    if (frameworkCount === undefined){frameworkCount=0}
    if (libCount === undefined){libCount=0}
    if (apiCount === undefined){apiCount=0}
    var totaList=apiCount+libCount+frameworkCount
    
    return(
      <div>
        <TopBar/>

        <div style={{flexWrap:'wrap', flexDirection: 'row', justifyContent: 'center', display:'flex', maxWidth:'1200px', marginRight:'auto', marginLeft:'auto'}} className='homepage'>
          <div>
            <h1 className="mainTitle" style={{ marginLeft:'-10px'}}>DevKit.</h1>
            <h3 className="subTitle" style={{marginTop:'5px'}}>Search for your favourite Software Tools with</h3>
             <ReactTypingEffect className="subTitle" style={{fontWeight:'400', marginTop:'-10px', cursor:'text'}} speed='50' eraseDelay="1500"
                text={[totaList.toString()+' Total Tools',apiCount.toString()+" APIs", libCount.toString()+" Libraries", frameworkCount.toString()+' Frameworks']}
              />
         </div>
         <div style={{maxWidth:'500px'}}>
          <img src={'/img/devkit-landing.png'} className='image' alt=""></img>
         </div>
        </div>

        {this.APIList!=null? <Search cardInfos={this.APIList} />:null}
      </div>
    )
  }
}

export default Homepage;