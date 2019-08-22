import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class TopBar extends Component {

    render() {
        return (
          <AppBar position="static" style={{ background: "black" }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{flexGrow:'1'}}>
                Search API
              </Typography>
              <Button color="inherit">Add API</Button>
            </Toolbar>
          </AppBar>
   
         );            
    }
}

export default TopBar
