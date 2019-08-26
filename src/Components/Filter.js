import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Filter extends Component {
  render() {
    return(
      <div className='filter'>
        <div>
          <Checkbox/>
        </div>
        <Select MenuProps={{style: {height: '400px'}}}>
        <MenuItem value={'Calendar'}>Calendar</MenuItem>
          <MenuItem value={'Data'}>Data</MenuItem>
          <MenuItem value={'Finance'}>Finance</MenuItem>
          <MenuItem value={'Front-end'}>Front-end</MenuItem>
          <MenuItem value={'Geocoding'}>Geocoding</MenuItem>
          <MenuItem value={'Health'}>Health</MenuItem>
          <MenuItem value={'Map'}>Map</MenuItem>
          <MenuItem value={'Machine Learning'}>Machine Learning</MenuItem>
          <MenuItem value={'Math'}>Math</MenuItem>
          <MenuItem value={'Music'}>Music</MenuItem>		
          <MenuItem value={'Messaging'}>Messaging</MenuItem>	
          <MenuItem value={'News'}>News</MenuItem>		
          <MenuItem value={'Storage'}>Storage</MenuItem>
          <MenuItem value={'Weather'}>Weather</MenuItem>
        </Select>
      </div>
    )
  }
}

export default Filter;