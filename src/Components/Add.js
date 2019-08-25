import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

class Add extends Component{
	state = {
		open: false,
		added: null,
		step: 0,
	}

	handleEvent(event) {
		this.setState({
			open: !this.state.open
		})
	}

	handleChange(event, input) {
		switch(input) {
			case 'Name':
				this.setState({
					name: event.target.value
				})
				break;
			case 'Organization':
				this.setState({
					organization: event.target.value
				})
				break;
			case 'Type':
				this.setState({
					type: event.target.value
				})
				break;
			case 'Category':
				this.setState({
					category: event.target.value
				})
				break;
			case 'Languages':
				this.setState({
					languages: event.target.value
				})
				break;
			case 'URL':
				this.setState({
					url: event.target.value
				})
				break;
			default:
		}
	}

	checked = (event) => {
		this.setState({
			price: event.target.checked
		})
	}

	submit () {
		axios.post('http://localhost:9000/request', {
				name: this.state.name,
				organization: this.state.organization,
				type: this.state.type,
				category: this.state.categories,
				price: this.state.price,
				language: this.state.language,
				recommended: this.state.recommended,
				url: this.state.url
			})
			.then(res => {
				this.setState({
					open: false,
					added: 'Request sent to add API to list'
				})
			})
			.catch(err => {
				this.setState({
					added: 'The API was not added'
				})
			})
	}

	render() {
		return(
			<div style={{margin:'20px',color:'black'}}>
				{this.state.added !== null? <ErrorMessage open={true} message={this.state.added}/> : null}
				<Dialog open={this.state.open}>
					<div style={{padding:'10px', width:'450px'}}>
						<DialogTitle style={{paddingBottom:'0px'}}>Add Software Tool</DialogTitle>
						<DialogContent>
							<div style={{width:'400px', margin:'auto'}}>
							<Stepper activeStep={this.state.step}>
								<Step><StepLabel></StepLabel></Step>
								<Step><StepLabel></StepLabel></Step>
								<Step><StepLabel></StepLabel></Step>
							</Stepper>
							</div>
							{this.state.step === 0? 
								<div style={{display:'flex', flexDirection:'column', width:'70%', margin:'auto', justifyContent:'space-evenly', height:'250px', marginBottom:'25px'}}>
									<TextField label='Name' onChange={(event) => this.handleChange(event,'Name')} defaultValue={this.state.name}/>
									<TextField label='Organization' onChange={(event) => this.handleChange(event,'Organization')} defaultValue={this.state.organization}/>
									<TextField label='URL to documentation' onChange={(event) => this.handleChange(event,'URL')} defaultValue={this.state.url}/>
								</div>
								: null
							}
							{this.state.step === 1?
								<div style={{display:'flex', flexDirection:'column', width:'70%', margin:'auto', height:'250px', marginBottom:'25px'}}>
									<p style={{marginBottom:'20px', marginTop:'35px'}}>Type</p>
									<Select onChange={(event) => this.handleChange(event, 'Type')} value={this.state.type}>
										<MenuItem value={'API'} style={{fontSize:'14px'}}>API</MenuItem>
										<MenuItem value={'Library'} style={{fontSize:'14px'}}>Library</MenuItem>
										<MenuItem value={'Framework'} style={{fontSize:'14px'}}>Framework</MenuItem>
										<MenuItem value={'Software tool'} style={{fontSize:'14px'}}>Software tool</MenuItem>
									</Select>
									<p style={{marginBottom:'20px', marginTop:'35px'}}>Category</p>
									<Select onChange={(event) => this.handleChange(event, 'Category')} value={this.state.category}>
										<MenuItem value={'Map'} style={{fontSize:'14px'}}>Map</MenuItem>
										<MenuItem value={'Calendar'} style={{fontSize:'14px'}}>Calendar</MenuItem>
										<MenuItem value={'Storage'} style={{fontSize:'14px'}}>Storage</MenuItem>
										<MenuItem value={'Messaging'} style={{fontSize:'14px'}}>Messaging</MenuItem>
										<MenuItem value={'Geocoding'} style={{fontSize:'14px'}}>Geocoding</MenuItem>
									</Select>
								</div> 
								: null
							}
							{this.state.step === 2? 
								<div style={{display:'flex', flexDirection:'column', width:'70%', margin:'auto', justifyContent:'space-evenly', height:'250px', marginBottom:'25px'}}>
									<TextField label='Languages' defaultValue={this.state.languages} onChange={(event) => this.handleChange(event,'Languages')} defaultValue={this.state.languages}/>
									<div>
										<Checkbox onClick={this.checked}/>
										Free
									</div>					
								</div> : null
							}
						</DialogContent>
						<DialogActions>
							{this.state.step === 0? 
								<div>
									<Button onClick={this.handleEvent.bind(this)}>Close</Button>
									<Button variant='outlined' color='primary' style={{marginLeft:'8px'}} onClick={()=>this.setState({step:1})}>Next</Button>
								</div>
							: this.state.step === 1?
								<div>
									<Button onClick={this.handleEvent.bind(this)}>Close</Button>
									<Button variant='outlined' color='primary' style={{marginLeft:'8px', marginRight:'8px'}} onClick={()=>this.setState({step:0})}>Back</Button>
									<Button variant='outlined' color='primary' style={{marginLeft:'8px'}} onClick={()=>this.setState({step:2})}>Next</Button>
								</div>
							: 
							<div>
								<Button onClick={this.handleEvent.bind(this)}>Close</Button>
								<Button variant='outlined' color='primary' style={{marginLeft:'8px', marginRight:'8px'}} onClick={()=>this.setState({step:1})}>Back</Button>
								<Button variant='contained' color='primary' onClick={this.submit.bind(this)}>Submit</Button>
							</div>
							}
						</DialogActions>
					</div>
				</Dialog>
				<Button variant='contained' style={{marginTop:"0px"}} onClick={this.handleEvent.bind(this)}>
					Add Software Tool
				</Button>
			</div>
    )
  }
}

export default Add;