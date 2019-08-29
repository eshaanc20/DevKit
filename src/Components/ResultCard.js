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

AOS.init();

export class ResultCard extends Component {
    render() {
      var cardStyling = {width:'700px', margin:'auto',transition: '0.2s', marginTop:'40px', marginBottom:'40px', overflow:'inherit'}
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
                
                <h2 style={{flexGrow:'1'}}>{cardInfo.title}</h2> 
                

                <h4 style={{ color:'white',  float:'right', marginTop:'-60px', background: cardInfo.type==="Library"? ('linear-gradient(to bottom right, #234DD9, #D214F5)'):  cardInfo.type==="API"?('linear-gradient(to bottom right, #23D932, #DBF514)'):('linear-gradient(to bottom right, #FCB412, #F51496)')
                 , padding:'10px', borderRadius:'20px', marginRight:'-50px'}}>
                 
                 {cardInfo.type}</h4>
                <h4 color="textSecondary">{cardInfo.organization}</h4>
               
                <Chip
                  style={{float:'right', margin:'5px'}}
                  label= {cardInfo.category}>
                </Chip>

                <CardActions>
                  <Button href={cardInfo.url}>Learn More</Button>
                </CardActions>

                <div style={{float:'right',}}>
                  {cardInfo.languages.map((lang) => ( 
                    <Chip
                      label= {lang}
                      style={{margin:'5px'}}>
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
