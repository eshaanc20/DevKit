import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {types} from './Add';
import {languages} from './Add';

class Filter extends Component {
  render() {
    return(
      <div className='filter'>
        <p className='text-filter'>Filter</p>
        <div style={{display:'flex', marginTop:'20px'}}>
          <p style={{marginTop:'8px', fontSize:'20px'}}>Free</p>
          <Checkbox/>
        </div>
        <div style={{marginTop:'40px'}}>
          <p className='filter-title'>Types of Software Tools</p>
          <Select 
            MenuProps={{style: {height: '400px'}}}
            style={{width:'200px'}}
          >
            {types.map(type => {
              return <MenuItem value={type} style={{fontSize:'14px'}}>{type}</MenuItem>
            })}
          </Select>
        </div>
        <div style={{marginTop:'40px'}}>
          <p className='filter-title'>Types of Software Tools</p>
          <Select 
            MenuProps={{style: {height: '400px'}}}
            style={{width:'200px'}}
          >
            {languages.map(language => {
              return <MenuItem value={language} style={{fontSize:'14px'}}>{language}</MenuItem>
            })}
          </Select>
        </div>
      </div>
    )
  }
}

export default Filter;