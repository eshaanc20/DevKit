import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import './main.css';
import image from './img/img.png';

export class ResultCard extends Component {

  //Styling of the card (to be moved to CSS)
    
    render() {
      var cardStyling = {maxWidth:'700px', margin:'auto', marginBottom:'50px',transition: '0.2s'}

        return this.props.cardInfos.map((cardInfo) => (
          <Card className="resultCard" style={cardStyling}>

            <div className="flex-containter">
            <div>
              <img className="resultCardImg" src={image} style={{width:'100px',height:'100px', borderRadius:"100px", margin:"20px 10px 20px 20px"}} alt=""></img>
            </div>
            
            <div className="resultCardContent">
            <CardContent>
              <h2>{cardInfo.title}</h2>
              <h4 color="textSecondary">{cardInfo.organization}</h4>
              <Chip
              style={{float:'right'}}
              size="large"
              label= {cardInfo.categories}
            ></Chip>
              <CardActions>
              <Button>Learn More</Button>
            </CardActions>
            </CardContent>

            
            </div>
            </div>
          </Card>
        )
      )   
    }
}

export default ResultCard
