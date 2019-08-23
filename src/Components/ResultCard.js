import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class ResultCard extends Component {

  //Styling of the card (to be moved to CSS)
    cardStyle = ()=> {  
          return{
              maxWidth:'700px',
              margin:'auto',
              marginBottom:'50px',
          }
      }
    
    render() {
        return this.props.cardInfos.map((cardInfo) => (
          <Card style={this.cardStyle()}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            {cardInfo.link}
            </Typography>
            <Typography variant="h5" component="h2">
            {cardInfo.title}
            </Typography>
            <Typography color="textSecondary">
              {cardInfo.link}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
          </Card>
        )
      )   
    }
}

export default ResultCard
