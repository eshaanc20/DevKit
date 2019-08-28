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
      var cardStyling = {width:'700px', margin:'auto',transition: '0.2s', marginTop:'40px', marginBottom:'40px'}
      return (
        <div>
          {this.props.cardInfos.map((cardInfo) => (
            <div data-aos="fade-up" data-aos-offset="-300">
            <Card className="resultCard" style={cardStyling}>
              <div className="flex-containter" >
              <div style={{backgroundColor: cardInfo.color}}>
                <img className="resultCardImg" src={image} style={{width:'100px',height:'100px', borderRadius:"100px", margin:"15px", border:'10px white solid'}} alt=""></img>
              </div>  
              <div className="resultCardContent">
                
              <CardContent>
                <h2>{cardInfo.title}</h2>
                <h4 color="textSecondary">{cardInfo.organization}</h4>

                <Chip
                  style={{float:'right', margin:'5px'}}
                  label= {cardInfo.category}>
                </Chip>
                
                <div style={{float:'right'}}>
                  {cardInfo.languages.map((lang) => ( 
                    <Chip
                      label= {lang}
                      style={{margin:'5px'}}>
                    </Chip>
                  ))}
                </div>

                <CardActions>
                  <Button href={cardInfo.url}>Learn More</Button>
                </CardActions>

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
