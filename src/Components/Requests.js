import React, {Component} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ErrorMessage from './ErrorMessage';
import TextField from '@material-ui/core/TextField';
import ResultCard from './ResultCard';

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
      <div style={{ width:'80%', margin:'auto'}}>
        <RequestCards cardInfos={this.requests}/>
      </div>
    )
  }
}

class RequestCards extends Component {
  state = {
    message: null
  }

  add(id) {
    axios.post('http://localhost:9000/add', {
        id: id
      })
      .then(res => {
        this.cards = this.cards.filter(card => {
          return card.id !== id
        })
        this.setState({
          message: 'The API was added to list'
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  delete(id) {
    axios.post('http://localhost:9000/delete', {
        id: id
      })
      .then(res => {
        this.cards = this.cards.filter(card => {
          return card.id !== id
        })
        this.setState({
          message: 'The API was not added to list'
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    this.cards = this.props.cardInfos;
    return (
      <div>
        {this.state.password === '1234'?
          <div style={{margin:'auto', width:'90%', maxWidth:'600px'}}>
            <a href='/'>Back</a>
            <h2 style={{textAlign:'center'}}>Requests</h2>
            {this.cards.map(card => {
              return(
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                    {card.title}
                    </Typography>
                    <Typography color="textSecondary">
                      {card.link}
                    </Typography>
                    <Button style={{marginTop:'10px'}}>Learn More</Button>
                  </CardContent>
                  <div style={{textAlign:'right', paddingBottom:'10px', paddingRight:'12px'}}>
                      <Button onClick={this.add.bind(this, card.id)}>Add</Button>
                      <Button onClick={this.delete.bind(this, card.id)}>Delete</Button>
                  </div>
                </Card>
            )})}
            {this.state.message !== null?  <ErrorMessage message={this.state.message} open={true}/>:null}
          </div> 
          : 
          <div style={{margin:'auto', marginTop:'100px', width:'80%', maxWidth:'400px'}}>
            <a  href='/'>Back</a>
            <Card style={{margin:'auto', marginTop:'60px', textAlign:'center', paddingTop:'10px', paddingBottom:'20px'}}>
              <CardContent>
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