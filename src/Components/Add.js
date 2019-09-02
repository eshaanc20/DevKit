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
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

const StepIcon = (props) => {
	return props.completed? 
		<CheckCircleIcon style={{color:'#7DD109'}}/>
		: <div 
			style={{
				color:'white', 
				backgroundColor: '#0093FF', 
				height: '20px', 
				width:'20px', 
				padding: '2px',
				textAlign:'center',
				borderRadius:'50px'}}
			>{props.icon}</div>
}

class Add extends Component{
	state = {
		open: false,
		added: null,
		step: 0,
		error: false,
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
		if (this.state.name === undefined ||
				this.state.organization === undefined ||
				this.state.url === undefined ||
				this.state.languages === undefined ||
				this.state.type === undefined ||
				this.state.category === undefined 
		) {
			this.setState({error: true})
		} else {
			axios.post('http://localhost:9000/request', {
				name: this.state.name,
				organization: this.state.organization,
				type: this.state.type,
				category: this.state.category,
				price: this.state.price,
				languages: this.state.languages,
				url: this.state.url
			})
			.then(res => {
				this.setState({
					name: '',
					organization: '',
					type: '',
					category: '',
					price: '',
					languages: [],
					url: '',
					open: false,
					added: 'Request sent to add software tool to list',
					step: 0,
					error: false,
				})
			})
			.catch(err => {
				this.setState({
					added: 'The software tool was not added'
				})
			})
		}
	}

	render() {
		return(
			<div style={{margin:'20px', marginRight:'0px',color:'black'}}>
				{this.state.added !== null? <ErrorMessage open={true} message={this.state.added}/> : null}
				<Dialog open={this.state.open}>
					<div style={{padding:'10px'}}>
						<DialogTitle style={{paddingBottom:'0px'}}>Add Software Tool</DialogTitle>
						<DialogContent>
							<div className='addOptions'>
								<Stepper activeStep={this.state.step}>
									<Step><StepLabel StepIconComponent={StepIcon}></StepLabel></Step>
									<Step><StepLabel StepIconComponent={StepIcon}></StepLabel></Step>
									<Step><StepLabel StepIconComponent={StepIcon}></StepLabel></Step>
								</Stepper>
							</div>
							{this.state.step === 0? 
								<div className='addOptions1'>
									<TextField 
										required
										label='Name' 
										onChange={(event) => this.handleChange(event,'Name')} 
										defaultValue={this.state.name}/>
									<TextField 
										required
										label='Organization' 
										onChange={(event) => this.handleChange(event,'Organization')} 
										defaultValue={this.state.organization}/>
									<TextField 
										required
										label='URL to documentation' 
										onChange={(event) => this.handleChange(event,'URL')} 
										defaultValue={this.state.url}/>
								</div>
								: null
							}
							{this.state.step === 1?
								<div className='addOptions2'>
									<p style={{marginBottom:'20px', marginTop:'35px'}}>Type</p>
									<Select onChange={(event) => this.handleChange(event, 'Type')} value={this.state.type}>
										{types.map(type => {
											return <MenuItem value={type} style={{fontSize:'14px'}}>{type}</MenuItem>
										})}
									</Select>
									<p style={{marginBottom:'20px', marginTop:'35px'}}>Category</p>
									<Select 
										onChange={(event) => this.handleChange(event, 'Category')} 
										value={this.state.category} 
										MenuProps={{style: {height: '400px'}}}
									>
										{categories.map(category => {
											return <MenuItem value={category} style={{fontSize:'14px'}}>{category}</MenuItem>
										})}
									</Select>
								</div> 
								: null
							}
							{this.state.step === 2? 
								<div className='addOptions3'>
									<div>
										<p>Languages</p>
										<Select 
											multiple 
											value={this.state.languages === undefined? []: this.state.languages} 
											onChange={(event) => this.handleChange(event, 'Languages')}
											MenuProps={{style: {height: '400px'}}}
											style={{width:'100%', marginTop:'10px'}}
										>
											{languages.map(language => {
												return <MenuItem value={language} style={{fontSize:'14px'}}>{language}</MenuItem>
											})}
										</Select>
									</div>
									<div>
										<Checkbox onClick={this.checked} style={{color:'#0093FF'}}/>
										Free
									</div>		
									{this.state.error? <div style={{color:'darkblue',textAlign:'center'}}>All input fields must be filled in</div>: null}
								</div> : null
							}
						</DialogContent>
						<DialogActions>
							{this.state.step === 0? 
								<div>
									<Button 
										onClick={this.handleEvent.bind(this)}
									>Close</Button>
									<Button 
										variant='outlined' 
										color='primary' 
										style={{marginLeft:'8px'}} 
										onClick={()=>this.setState({step:1})}
									>Next</Button>
								</div>
							: this.state.step === 1?
								<div>
									<Button onClick={this.handleEvent.bind(this)}>Close</Button>
									<Button 
										variant='outlined' 
										color='primary' 
										style={{marginLeft:'8px', marginRight:'8px'}} 
										onClick={()=>this.setState({step:0})}
									>Back</Button>
									<Button 
										variant='outlined' 
										color='primary' 
										style={{marginLeft:'8px'}} 
										onClick={()=>this.setState({step:2})}
									>Next</Button>
								</div>
							: 
							<div>
								<Button onClick={this.handleEvent.bind(this)}>Close</Button>
								<Button 
									variant='outlined' 
									color='primary' 
									style={{marginLeft:'8px', marginRight:'8px'}} 
									onClick={()=>this.setState({step:1})}
								>Back</Button>
								<Button 
									variant='contained' 
									style={{backgroundColor:'#0093FF', color:'white'}}
									onClick={this.submit.bind(this)}
								>Submit</Button>
							</div>
							}
						</DialogActions>
					</div>
				</Dialog>
				<Button variant='contained' style={{marginTop:"0px", borderRadius:'100px', background:'#0093FF', color:"#FFFFFF", fontFamily:"Avenir", fontWeight:'900', textTransform:'none', fontSize:'20px', padding:'0px 25px 0px 25px', transition: '0.2s'}} 
				onClick={this.handleEvent.bind(this)}>
					Add Tool
				</Button>
			</div>
    )
  }
}

var categories = [
	'Calendar',
	'Data',
	'Finance',
	'Front-end',
	'Geocoding',
	'Health',
	'Map',
	'Machine Learning',
	'Math',
	'Music',
	'Messaging',
	'News',
	'Storage',
	'Weather'
]

var types = [
	'API',
	'Framework',
	'Library',
	'Software Tool',
]

var languages = [
	'CSS',
	'C',
	'C++',
	'C#',
	'HTML',
	'Java',
	'JavaScript',
	'PHP',
	'Python',
	'SQL',
	'TypeScript',
	'Ruby',
]

export {categories};
export {languages};
export {types};
export default Add;