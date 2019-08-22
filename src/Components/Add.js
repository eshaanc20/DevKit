import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

class Add extends Component{
	state = {
		open: false,
		added: null,
	}

	handleEvent(event) {
		this.setState({
			open: !this.state.open
		})
	}

	handleChange(event, input) {
		if (input === 'Name') {
			this.setState({
				name: event.target.value
			})
		} else if (input === 'Organization') {
			this.setState({
				organization: event.target.value
			})
		} else if (input === 'Categories') {
			this.setState({
				categories: event.target.value
			})
		} else if (input === 'Language') {
			this.setState({
				language: event.target.value
			})
		} else if (input === 'Recommended') {
			this.setState({
				recommended: event.target.value
			})
		} else if (input === 'URL') {
			this.setState({
				url: event.target.value
			})
		}
	}

	checked (event) {
		this.setState({
			price: event.target.checked
		})
	}

	submit () {
		axios.post('http://localhost:9000/add', {
				name: this.state.name,
				organization: this.state.organization,
				categories: this.state.categories,
				price: this.state.price,
				language: this.state.language,
				recommended: this.state.recommended,
				url: this.state.url
			})
			.then(res => {
				console.log(res)
				this.setState({
					open: false,
					added: 'The API was added'
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
			<div style={{margin:'20px'}}>
				{this.state.added !== null?
					<ErrorMessage open={true} message={this.state.added}/> : null}
				<Dialog open={this.state.open}>
					<div style={{padding:'10px'}}>
						<DialogTitle>Add API</DialogTitle>
						<DialogContent>
							<div style={{display: 'grid', gridTemplateColumns: 'auto auto', gridGap:'40px'}}>
								<TextField label='Name' onChange={(event) => this.handleChange(event,'Name')}/>
								<TextField label='Organization' onChange={(event) => this.handleChange(event,'Organization')}/>
								<TextField label='Categories' onChange={(event) => this.handleChange(event,'Categories')}/>
								<div>
									Free
									<Checkbox onClick={this.checked.bind(this)}/>
								</div>
								<TextField label='Language' onChange={(event) => this.handleChange(event,'Language')}/>
								<TextField label='Recommended' onChange={(event) => this.handleChange(event,'Recommended')}/>
							</div>
							<TextField label='URL' style={{width:'100%', marginTop:'40px', marginBottom:'20px'}} onChange={(event) => this.handleChange(event,'URL')}/>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleEvent.bind(this)}>Close</Button>
							<Button variant='contained' color='primary' onClick={this.submit.bind(this)}>Submit</Button>
						</DialogActions>
					</div>
				</Dialog>
				<Button variant='contained' style={{marginTop:"0px"}}onClick={this.handleEvent.bind(this)}>
					Add API
				</Button>
			</div>
    )
  }
}

class ErrorMessage extends Component{
	state = {
		open: this.props.open
	}
	render() {
		return(
			<Dialog open={this.state.open}>
				<DialogTitle>
					Adding API
				</DialogTitle>
				<DialogContent>
					{this.props.message}
				</DialogContent>
				<DialogActions>
					<Button onClick={() => this.setState({open:false})}>Close</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

export default Add;