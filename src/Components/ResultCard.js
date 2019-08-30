import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import './main.css';
import image from './img/img3.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

AOS.init();
var likesList = [];
var FontAwesome = require('react-fontawesome');

export class ResultCard extends Component {
  state={
    liked:false,
    lastLiked:[]
  }
  
    render() {
      var cardStyling = {width:'700px', margin:'auto',transition: '0.2s', marginTop:'40px', marginBottom:'40px', overflow:'inherit', backgroundColor:'white', paddingBottom:'0px'}
      console.log(this.state.liked)
      return (
        <div style={{margin:'auto'}}>
          {this.props.cardInfos.map((cardInfo, index) => (
            
            <div key={index} data-aos="fade-up" data-aos-offset="100">
            
            <Card className="resultCard" style={cardStyling}>
              <div className="flex-containter" >
              <div style={{backgroundColor: cardInfo.color}}>
                <img className="resultCardImg" src={image} style={{width:'100px',height:'100px', borderRadius:"100px", margin:"15px", border:'10px white solid'}} alt=""></img>
              </div>  
              <div className="resultCardContent">
                
              <CardContent>
                <h2 style={{ display:' inline', fontSize:'28px'}}>{cardInfo.title}</h2> 
                <Chip
                  style={{ margin:'7px', marginTop:'2px', padding:'0px',position:'absolute'}}
                  label= {cardInfo.category}>
                </Chip>

                <h4 style={{ color:'white',  float:'right', marginTop:'-35px', background: cardInfo.type==="Library"? 'linear-gradient(to bottom right, #234DD9, #D214F5)':  cardInfo.type==="API"?'linear-gradient(to bottom right, #23D932, #14DBF5)':'linear-gradient(to bottom right, #FCB412, #F51496)'
                , padding:'10px', borderRadius:'20px', marginRight: cardInfo.type==="Library"? '-50px':  cardInfo.type==="API"?'-35px':'-60px'}}>{cardInfo.type}</h4>
                <h4 color="textSecondary" style={{fontSize:'20px', marginTop:'-4px', marginLeft:'0.5px'}}>{cardInfo.organization}</h4>
               
                <CardActions style={{float:'right', marginTop:'-30px'}}>
                  <Button target="_blank" style={{float:'bottom', marginTop:'0px', fontFamily:'avenir'}} 
                    onClick={() => {
                      likesList.push(cardInfo.id)
                      this.setState({lastLiked:likesList})
                      
                        var found = likesList.filter(function(x) {
                          return x === cardInfo.id;
                        });

                        if  (found.length%2===1){
                           cardInfo.likes+=1
                           axios.post('http://localhost:9000/like', {
                              id: cardInfo.id
                            })
                            .then(res => {console.log(res)});
                        }
                        else{
                          cardInfo.likes-=1;
                        }
                      console.log(found.length)
                      console.log(this.state)
                      
                      // var i, liked=false;
                      // for (i = 0; i < likesList.length; i++) { 
                      //   if (likesList[i]===cardInfo.id){
                      //     liked=true
                      //   }
                      // }
                      //  if (liked===false){
                      //   likesList.push(cardInfo.id);
                      //   cardInfo.likes+=1;
                      //   this.setState({liked:true})
                      //   axios.post('http://localhost:9000/like', {
                      //     id: cardInfo.id
                      //   })
                      //   .then(res => {console.log(res)})
                      //  }
                      }}>Like</Button>
                      
                  <h4>{cardInfo.likes}</h4>
                </CardActions>

                <CardActions>
                  <Button href={cardInfo.url} target="_blank" style={{float:'bottom', marginTop:'0px', fontFamily:'avenir'}}>View Documentation</Button>
                </CardActions>

                <div style={{float:'right',}}>
                  {cardInfo.languages.map((lang) => ( 
                    <Chip
                      label= {lang}
                      style={{margin:'5px', marginTop:'-45px'}}>
                    </Chip>
                  ))}
                </div>

              </CardContent>
            
              </div>
              </div>
            </Card>
            </div>
           
          ))}
        </div>
       
    )
  }
}

export default ResultCard
