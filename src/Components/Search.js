import React, { Component } from 'react'
import ResultCard from "./ResultCard"
import {categories} from './Add';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import './main.css';


class Search extends Component {
  state={
    textField: null,
    category: 'none',
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
      <div className='searchPage'>
        <div className='search'>
        <SearchIcon 
          style={{
            position:'absolute', 
            fontSize:'24px', 
            color:'gray',
            marginTop:'18px',
            marginLeft: '14px'}}
          />
        <input
        type='text'
        className='searchInput'
        placeholder='Search for software tool'
        value={this.state.textField}
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') {
          this.setState({textField:ev.target.value, category:'none'})
        }}}>
        </input>
        <Select 
            MenuProps={{style: {height: '400px'}}}
            className='categorySearch'
            style={{color: this.state.category==='none'? 'gray': 'black', fontSize:'18px'}}
            onChange = {(event) => this.setState({category:event.target.value, textField:''})}
            value={this.state.category}
          >
            <MenuItem value='none' style={{fontSize:'14px'}} disabled>Search by category</MenuItem>
            {categories.map(category => {
              return <MenuItem value={category} style={{fontSize:'14px'}}>{category}</MenuItem>
            })}
        </Select>
        </div>
        <ResultCard cardInfos={filteredList}/>
      </div>
    )
  }
}
 
 export default Search;
 