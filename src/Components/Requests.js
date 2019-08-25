import React, {Component} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ErrorMessage from './ErrorMessage';
import TextField from '@material-ui/core/TextField';
import SettingsIcon from '@material-ui/icons/Settings';

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
        <RequestCards cards={this.requests}/>
      </div>
    )
  }
}

class RequestCards extends Component {
  state = {
    message: null
  }

  add(id, index) {
    axios.post('http://localhost:9000/add', {
        id: id
      })
      .then(res => {
        this.props.cards.splice(index,1);
        this.setState({
          message: 'The API was added to list'
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  delete(id, index) {
    axios.post('http://localhost:9000/delete', {
        id: id
      })
      .then(res => {
        this.props.cards.splice(index,1);
        this.setState({
          message: 'The API was not added to list'
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        {this.state.password === '1234'?
          <div style={{margin:'auto', width:'90%', maxWidth:'600px', marginTop:'50px'}}>
            <a href='/'>back</a>
            <h2 style={{textAlign:'center'}}>Requests</h2>
            {this.props.cards.map((card,index) => {
              return(
                <Card style={{marginBottom:'24px'}}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography color="textSecondary">
                      {card.organization}
                    </Typography>
                    <Button style={{marginTop:'10px'}}>Learn More</Button>
                  </CardContent>
                  <div style={{textAlign:'right', paddingBottom:'10px', paddingRight:'12px'}}>
                      <Button variant='contained' color='primary' style={{marginRight:'10px'}} onClick={this.add.bind(this, card.id, index)}>Add</Button>
                      <Button variant='contained' color='secondary' onClick={this.delete.bind(this, card.id, index)}>Delete</Button>
                  </div>
                </Card>
            )})}
            {this.state.message !== null?  <ErrorMessage message={this.state.message} open={true}/>:null}
          </div> 
          : 
          <div style={{margin:'auto', marginTop:'100px', width:'80%', maxWidth:'400px'}}>
            <a  href='/'>back</a>
            <Card style={{margin:'auto', marginTop:'60px', textAlign:'center', paddingTop:'10px', paddingBottom:'20px'}}>
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