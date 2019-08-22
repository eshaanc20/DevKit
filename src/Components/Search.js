import React, { Component } from 'react'
import ResultCard from "./ResultCard"
import TextField from '@material-ui/core/TextField';


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
    
   render() { 
    var filteredList = this.props.cardInfos.filter(this.checkList,this.state.textField);
    
     return (
       <div>
         <TextField variant="outlined" label="search" onChange={(event)=>this.setState({textField:event.target.value})}/>
         <ResultCard cardInfos={filteredList}/>
       </div>
     )
   }
 }
 
 export default Search
 