import React, {Component} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import ErrorMessage from './ErrorMessage';
import TextField from '@material-ui/core/TextField';
import SettingsIcon from '@material-ui/icons/Settings';
import Likes from './Likes.js';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import SettingsList from './SettingsList.js';

class Requests extends Component {
  constructor(props){
    super(props);
    this.requests = []
  }

  state = {
    response: false,
    password: null,
  }

  componentDidMount() {
    axios.get('https://devkit-backend.herokuapp.com/viewRequests')
      .then((res) => {
        this.requests = res.data;
        this.setState({
          response: true
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return(
      <div style={{ width:'80%', margin:'auto'}}>
        <RequestCards cards={this.requests}/>
      </div>
    )
  }
}

class RequestCards extends Component {
  state = {
    message: null
  }

  add(Title, index) {
    console.log(Title)
    axios.post('https://devkit-backend.herokuapp.com/add', {
        title: Title
      })
      .then(res => {
        this.props.cards.splice(index,1);
        this.setState({
          message: 'The software tool was added to the list'
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  delete(Title, index) {
    axios.post('https://devkit-backend.herokuapp.com/delete', {
        title: Title,
        request: true
      })
      .then(res => {
        this.props.cards.splice(index,1);
        this.setState({
          message: 'The software tool was not added to the list'
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    var cardStyling = {
      width:'700px', 
      margin:'auto',
      transition: '0.2s', 
      marginTop:'60px', 
      marginBottom:'20px', 
      overflow:'inherit', 
      backgroundColor:'white', 
      paddingBottom:'0px',  
      borderRadius:'10px'
    }
    return (
      <div>
        {this.state.password === '1234'?
          <div className='settings'>
            <a href='/'>back</a>
            <h2 style={{textAlign:'center'}}>Requests</h2>
            {this.props.cards.map((cardInfo,index) => {
              return(
                <div key={index} data-aos="fade-up" data-aos-offset="100">
                  <Card className="resultCard" style={cardStyling}>
                    <div className="flex-containter" style={{padding:'0px'}}>     
                    {/* Result Image */}
                    <div style={{height:'160px'}}>
                      <img className="resultCardImg" src={cardInfo.image} style={{width:'175px',height:'160px' ,paddingBottom:'0px',objectFit: 'cover', opacity:'1', borderRadius:'10px 0px 0px 10px' }} alt=""></img>
                    </div>
                    <div className="resultCardContent">
                      <CardContent style={{paddingBottom:'0px', height:'100%'}}>
                        <h2 style={{ display:' inline', fontSize:'28px'}}>{cardInfo.title}</h2> 
                        <Chip
                          style={{ margin:'7px', marginTop:'2px', padding:'0px',position:'absolute',}}
                          label= {cardInfo.category}>
                        </Chip>
                    
                        <h4 style={{ color:'white',  float:'right', marginTop:'-35px', background: cardInfo.type==="Library"? 'linear-gradient(to bottom right, #234DD9, #D214F5)':  cardInfo.type==="API"?'linear-gradient(to bottom right, #23D932, #14DBF5)':'linear-gradient(to bottom right, #FCB412, #F51496)'
                        , padding:'10px', borderRadius:'20px', marginRight: cardInfo.type==="Library"? '-50px':  cardInfo.type==="API"?'-35px':'-60px'}}>{cardInfo.type}</h4>
                        <Likes cardInfoL={cardInfo}/>
                        <h4 color="textSecondary" style={{fontSize:'20px', marginTop:'-2px', marginLeft:'0.5px', display:'inline'}}>{cardInfo.organization}</h4>

                        <CardActions>
                          <Button href={cardInfo.url} target="_blank" style={{float:'bottom', marginTop:'20px', fontFamily:'Avenir, sans-serif', marginLeft:'-6px'}}>View Details</Button>
                          {cardInfo.price===true?
                          <MoneyOffIcon alt="Free" title="Free" style={{fontSize:'10px', marginTop:'20px',  background:'linear-gradient(to bottom right, #56EB33,#8AF023)', color:'white', borderRadius:'100px', width:'22px', height:'22px', textAlign:'center', marginLeft:'0px'}} />
                          :null}
                        </CardActions>

                        <div style={{float:'right', maxWidth:'330px',  marginTop:'-48px', textAlign:'right'}}>
                          {cardInfo.languages.map((lang) => ( 
                            <Chip
                              label= {lang}
                              style={{margin:'5px',}}>
                            </Chip>
                          ))}
                        </div>

                        </CardContent>
                      </div>
                    </div>
                  </Card>
                  <div style={{textAlign:'right'}}>
                      <Button 
                        variant='contained' 
                        style={{marginRight:'10px', backgroundColor:'green', color:'white'}} 
                        onClick={this.add.bind(this, cardInfo.title, index)}
                      >Add</Button>
                      <Button 
                        variant='contained' 
                        style={{backgroundColor:'red', color:'white'}}
                        onClick={this.delete.bind(this, cardInfo.title, index)}
                      >Delete</Button>
                  </div>
                </div>
            )})}
            {this.state.message !== null?  <ErrorMessage message={this.state.message} open={true}/>:null}
            <SettingsList/>
          </div> 
          : 
          <div style={{margin:'auto', marginTop:'100px', width:'80%', maxWidth:'400px'}}>
            <a  href='/'>back</a>
            <Card className='settings-password'>
              <CardContent>
                <SettingsIcon style={{fontSize:'50px'}}/>
                <h2 style={{marginBottom:'28px'}} variant='h5'>Settings</h2>
                <TextField label="Password" onChange={(event) => this.setState({password:event.target.value})}/>
              </CardContent>
            </Card>
          </div>
        }    
      </div>
    )
  }
}

export default Requests;