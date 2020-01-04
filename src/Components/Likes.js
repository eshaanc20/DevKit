import React, { Component } from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import './main.css';
import 'aos/dist/aos.css';
import axios from 'axios';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


export class Likes extends Component {
    state={
        liked:false
      }
    render() {
        return (
            <div>
                <CardActions style={{float:'right', marginTop:'-12px',}}>
                  <Button style={{width:'35px', height:'35px', borderRadius:'100px', color: this.state.liked===false?'black':'#0093FF', fontFamily:'Avenir, sans-serif', fontWeight:'900'}}>
                  <ThumbUpAltIcon style={{float:'bottom', marginTop:'0px', fontFamily:'Avenir, sans-serif', paddingRight:'10px', fontWeight:'900'}} 
                    onClick={() => {
                      if (this.state.liked===false){
                          this.props.cardInfoL.likes+=1
                          this.setState({liked:true})
                      }
                      if (this.state.liked===true){
                        this.props.cardInfoL.likes-=1
                        this.setState({liked:false})
                    }
                    axios.post('https://devkit-backend.herokuapp.com/like', {
                            title: this.props.cardInfoL.title
                        })
                    }}></ThumbUpAltIcon>{this.props.cardInfoL.likes}</Button>
                </CardActions>
                
            </div>
        )
    }
}

export default Likes
