import React, {Component} from 'react';
import axios from 'axios';
import Search from './Search';
import TopBar from './TopBar';
import ReactTypingEffect from 'react-typing-effect';


class Homepage extends Component{
  constructor(props){
    super(props);
    this.list = null
  }

  state = {
    response:false
  }

  //Getting list from the backend
  componentDidMount() {
    axios.get('https://devkit-backend.herokuapp.com/softwareTools')
      .then((res) => {
        this.list=res.data;
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
    if (this.list!=null){
      for (i = 0; i < this.list.length; i++) { 
        if (this.list[i].type === "Framework"){frameworkCount+=1}
        if (this.list[i].type === "Library"){libCount+=1}
        if (this.list[i].type === "API"){apiCount+=1}
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
             <ReactTypingEffect className="subTitle-text" style={{fontWeight:'400', cursor:'text'}} speed='50' eraseDelay="1500"
                text={[totaList.toString()+' Total Tools',apiCount.toString()+" APIs", libCount.toString()+" Libraries", frameworkCount.toString()+' Frameworks']}
              />
         </div>
         <div style={{maxWidth:'500px'}}>
          <img src={'/img/devkit-landing.png'} className='image' alt=""></img>
         </div>
        </div>

        {this.list!=null? <Search cardInfos={this.list} />:null}
      </div>
    )
  }
}

export default Homepage;