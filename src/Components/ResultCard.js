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
import Likes from './Likes.js'
import MoneyOffIcon from '@material-ui/icons/MoneyOff';

AOS.init();
export class ResultCard extends Component {  
    render() {
      var cardStyling = {width:'700px', margin:'auto',transition: '0.2s', marginTop:'40px', marginBottom:'40px', overflow:'inherit', backgroundColor:'white', paddingBottom:'0px'}
      return (
        <div style={{margin:'auto'}}>
          {this.props.cardInfos.map((cardInfo, index) => (
        
            
            <div key={index} data-aos="fade-up" data-aos-offset="100">
  
            <Card className="resultCard" style={cardStyling}>
              <div className="flex-containter" >
              <div style={{backgroundColor: cardInfo.color,}}>
                <img className="resultCardImg" src={image} style={{width:'100px',height:'100px', borderRadius:"100px", margin:"15px", border:'10px white solid', opacity:'1' }} alt=""></img>
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
               {/* {cardInfo.price===true?
                <CardActions style={{float:'left'}}>
                <Chip
                  style={{ margin:'7px', marginTop:'-15px', padding:'0px',  marginRight:'0px', background:'linear-gradient(to bottom right, #56EB33,#8AF023)', color:'white', fontFamily:'avenir',fontWeight:'900', fontSize:'16px', width:'30px'}}
                  icon={<AttachMoneyIcon style={{ color:'white'}} />}>
                </Chip>
                </CardActions>
               :null} */}

                <CardActions>
                  <Button href={cardInfo.url} target="_blank" style={{float:'bottom', marginTop:'20px', fontFamily:'avenir', marginLeft:'-6px'}}>View Details</Button>
                  {cardInfo.price===true?
                  <MoneyOffIcon style={{fontSize:'10px', marginTop:'20px',  background:'linear-gradient(to bottom right, #56EB33,#8AF023)', color:'white', borderRadius:'100px', width:'22px', height:'22px', textAlign:'center', marginLeft:'0px'}} />
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
            </div>
           
          ))}
        </div>
       
    )
  }
}

export default ResultCard
