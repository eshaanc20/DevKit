import React, { Component } from 'react'
import ResultCard from "./ResultCard"
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


  class Search extends Component {
    constructor(props) {
      super(props);
    }

    state={
      textField:null,
    }

    checkList = (cardInfo) => {
      if (this.state.textField === null){
        return true
      }
      else{
        return cardInfo.title.indexOf(this.state.textField)>-1
      }
    }

    searchStyle = ()=> {  
          return{
              maxWidth:'700px',
              margin:'auto',
              marginBottom:'50px',
          }
      }

   render() { 
    var filteredList = this.props.cardInfos.filter(this.checkList,this.state.textField);
    
     return (
       <div>
         <div style={this.searchStyle()}>
         <TextField variant="outlined" label="search" style={{width:"650px"}} onChange={(event)=>this.setState({textField:event.target.value})}/>
         <IconButton  aria-label="search">
           <SearchIcon />
         </IconButton>
         </div>
         <ResultCard cardInfos={filteredList}/>
       </div>
     )
   }
 }
 
 export default Search
 