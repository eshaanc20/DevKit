import React, { Component } from 'react'
import ResultCard from "./ResultCard"
import {categories} from './Add';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Checkbox from '@material-ui/core/Checkbox';
import {languages} from './Add';
import './main.css';
import {animateScroll as scroll} from 'react-scroll';

class Search extends Component {
  state={
    textField: null,
    category: 'none',
    show: false,
    tabValue: 0,
    tab: '',
    language: '',
    checkbox: false,
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

  filterOptions (event, newValue) {
    var tab = newValue === 0? 'API': newValue === 1? 'Framework': newValue === 2? 'Library': 'Software Tool';
    this.setState({tabValue:newValue, tab: tab})
  }

  render() { 
    //Getting the filtered list based on input
    var filteredList = this.props.cardInfos.filter(this.checkList)

    if (this.state.category !== 'none') {
      filteredList = this.props.cardInfos.filter(card => {
        return card.category === this.state.category
      });
    }

    if (this.state.tab !== '') {
      filteredList = filteredList.filter(element => {
        return element.type === this.state.tab;
      })
    }
    
    if (this.state.language !== '') {
      filteredList = filteredList.filter(element => {
        return element.languages.indexOf(this.state.language) !== -1;
      })
    }

    if (this.state.checkbox === true) {
      filteredList = filteredList.filter(element => {
        return element.price;
      })
    }

    return (
      <div className='searchPage' style={{marginTop: '5%'}}>
        <div className='search'>
          <SearchIcon 
            style={{
              position:'absolute', 
              fontSize:'24px', 
              color:'gray',
              marginTop:'18px',
              marginLeft: '18px'}}
            />
          <input
          type='text'
          className='searchInput'
          placeholder='Search for software tool'
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              scroll.scrollTo(600);
            this.setState({textField:ev.target.value, category:'none', show: true})
          }}}>
          </input>
          <Select 
              MenuProps={{style: {height: '400px'}}}
              className='categorySearch'
              style={{color: this.state.category==='none'? 'gray': 'black', fontSize:'18px'}}
              onChange = {(event) => this.setState({category:event.target.value, textField:'', show: true})}
              value={this.state.category}
            >
              <MenuItem value='none' style={{fontSize:'14px'}} disabled>Search by category</MenuItem>
              {categories.map((category,index) => {
                return <MenuItem key={index} value={category} style={{fontSize:'14px'}}>{category}</MenuItem>
              })}
          </Select>
        </div>
        {this.state.show? 
          <div style={{width:'80%', margin:'auto'}}>
            <div style={{display:'flex', justifyContent:'center'}}>
              <Tabs value={this.state.tabValue} style={{marginTop:'20px'}} onChange={this.filterOptions.bind(this)} TabIndicatorProps={{style: {backgroundColor:'#0093FF'}}}>
                <Tab label='API'/>
                <Tab label='Framework'/>
                <Tab label='Library'/>
                <Tab label='Software tool'/>
              </Tabs>
              <Select 
                style={{width:'120px', marginLeft:'20px', marginRight:'25px', height: '40px', marginTop:'20px', fontSize:'14px'}} 
                onChange={(event) => this.setState({language: event.target.value})}
                value={this.state.language}
              >
                {languages.map((language,index) => {
                  return <MenuItem key={index} value={language} style={{fontSize:'14px'}}>{language}</MenuItem>
                })}
              </Select>
              <div style={{display:'flex'}}>
                <p style={{marginTop:'34px'}}>Free</p>
                <Checkbox style={{width:'20px', height:'21px', marginTop:'25px', color:'#0093FF'}} onChange={(event) => this.setState({checkbox: event.target.checked})}/>
              </div>
            </div>
            <ResultCard  cardInfos={filteredList}/>
          </div> : null
        }
      </div>
    )
  }
}
 
 export default Search;
 