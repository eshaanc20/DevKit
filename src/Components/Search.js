import React, { Component } from 'react'
import ResultCard from "./ResultCard"
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {categories} from './Add';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './main.css';


class Search extends Component {
  state={
    textField:null,
  }

  //Method for filtering the results
  checkList = (cardInfo) => {
    if (cardInfo.title !== null ) {
      var title = cardInfo.title.toLowerCase();
      if (this.state.textField === null ||  this.state.textField === ' ' || this.state.textField === undefined){
        return true
      }
      else{
        var textFieldSearch = this.state.textField.toLowerCase();
        return title.indexOf(textFieldSearch)>-1
      }
    } else{
    return false
    }
  }

  render() { 
  //Getting the filtered list based on input
  var filteredList = this.props.cardInfos.filter(this.checkList);
  
    return (
      <div className='search'>
        <div style={{margin:'auto', width: '60%', display: 'flex', minWidth: '400px'}}>
        <TextField variant="outlined" label="search" style={{width:'100%', margin:'auto'}} onChange={(event)=> {this.inputHandle = event.target.value}}/>
        <Select 
            MenuProps={{style: {height: '400px'}}}
            style={{width:'200px', marginLeft:'20px', marginRight:'20px'}}
          >
            {categories.map(category => {
              return <MenuItem value={category} style={{fontSize:'14px'}}>{category}</MenuItem>
            })}
        </Select>
        <IconButton  aria-label="search">
          <SearchIcon onClick={()=>this.setState({textField:this.inputHandle})}/>
        </IconButton>
        </div>
        <ResultCard cardInfos={filteredList}/>
      </div>
    )
  }
}
 
 export default Search;
 