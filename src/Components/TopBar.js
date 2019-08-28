import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import Add from './Add'

class TopBar extends Component {
    render() {
        return (
          <AppBar position="fixed" style={{ background: "black", maxHeight:"63px",}}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                {/* <MenuIcon /> */}
              </IconButton>
              <Typography variant="h6" style={{ fontSize:'28px',  fontFamily:'Avenir', fontWeight:'900'}}>
                DevKit </Typography>
                <img src={require('./img/logo.png')}  alt='' style={{marginLeft:'5px',height:'35px',}}></img>
                <div style={{ flexGrow:'1'}}></div>
              <Add/>
              <a href='/settings'>
                <SettingsIcon style={{fontSize:'30px', color:'white'}}/>
              </a>
            </Toolbar>
          </AppBar>
         );            
    }
}

export default TopBar
