import React, {Component} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ResultCard from './ResultCard';

class Settings extends Component {
  constructor(props){
    super(props);
    this.requests = []
  }

  state = {
    response: false
  }

  componentDidMount() {
    axios.get('http://localhost:9000/viewRequests')
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
      <div style={{marginTop:'40px'}}>
        <h2 style={{textAlign:'center'}}>Settings</h2>
        <SettingsCard cardInfos={this.requests}/>
      </div>
    )
  }
}

class SettingsCard extends Component {
  add(id) {
    axios.post('http://localhost:9000/add', {
        id: id
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      })
  }

  delete(id) {
  }

  render() {
    return (
      <div>
        {this.props.cardInfos.map(cardInfo => {
          return(
            <Card style={{maxWidth:'700px', margin:'auto', width:'80%'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                {cardInfo.title}
                </Typography>
                <Typography color="textSecondary">
                  {cardInfo.link}
                </Typography>
                <Button style={{marginTop:'10px'}}>Learn More</Button>
              </CardContent>
              <div style={{textAlign:'right', paddingBottom:'10px', paddingRight:'12px'}}>
                  <Button onClick={this.add.bind(this, cardInfo.id)}>Add</Button>
                  <Button onClick={this.delete.bind(this, cardInfo.id)}>Delete</Button>
              </div>
            </Card>
        )})}
      </div>
    )
  }
}

export default Settings;