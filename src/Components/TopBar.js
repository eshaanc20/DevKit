import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import Add from './Add'

class TopBar extends Component {
    render() {
        return (
          <AppBar position="fixed" style={{ background: "black", maxHeight:"63px",}}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{flexGrow:'1'}}>
                DevKit
              </Typography>
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
