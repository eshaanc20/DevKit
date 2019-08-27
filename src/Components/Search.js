import React, { Component } from 'react'
import ResultCard from "./ResultCard"
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


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
    }
    else{
    return false
    }
  }

    //Style for Search Bar
    searchStyle = ()=> {  
          return{
              maxWidth:'700px',
              margin:'auto',
              marginBottom:'50px',
              marginTop:'20px'
          }
      }

   render() { 
    //Getting the filtered list based on input
    var filteredList = this.props.cardInfos.filter(this.checkList);
    
     return (
       <div>
         <div style={this.searchStyle()}>
         <TextField variant="outlined" label="search" style={{width:'650px',}} 
         
         onKeyPress={(ev) => {
          console.log(`Pressed keyCode ${ev.key}`);
          if (ev.key === 'Enter') {
           this.setState({textField:ev.target.value})
            
          }}}/>
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
 