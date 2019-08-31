import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Add from './Add';

class TopBar extends Component {
    render() {
        return (
          <AppBar position="fixed" style={{ background: "black", maxHeight:"63px",}}>
            <Toolbar>
              <Typography variant="h6" style={{ fontSize:'28px',  fontFamily:'Avenir', fontWeight:'900'}}>
                DevKit </Typography>
                <img src={'/img/logo.png'}  alt='' style={{marginLeft:'5px',height:'35px',}}></img>
                <div style={{ flexGrow:'1'}}></div>
                <p style={{ fontFamily:'avenir', fontWeight:'900', fontSize:'19px', marginTop:'3px', marginRight:'-10px'}}>Don't See A Tool?</p>
              <Add/>
            </Toolbar>
          </AppBar>
         );            
    }
}

export default TopBar
