import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Add from './Add'

class TopBar extends Component {
    render() {
        return (
          <AppBar position="static" style={{ background: "black", maxHeight:"63px"}}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{flexGrow:'1'}}>
                Search API
              </Typography>
              <Add/>
              <Button href="/settings" style={{color:'white'}}>
                Settings
              </Button>
            </Toolbar>
          </AppBar>
         );            
    }
}

export default TopBar
