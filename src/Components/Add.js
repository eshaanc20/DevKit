import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

class Add extends Component{
	state = {
		open: false
	}

	handleEvent(event) {
		this.setState({
			open: !this.state.open
		})
	}

	render() {
		return(
			<div style={{margin:'20px'}}>
				<Dialog open={this.state.open}>
					<div style={{padding:'10px'}}>
						<DialogTitle>Add API</DialogTitle>
						<DialogContent>
							<div style={{display: 'grid', gridTemplateColumns: 'auto auto', gridGap:'40px'}}>
								<TextField label='Name'/>
								<TextField label='Organization'/>
								<TextField label='Categories'/>
								<TextField label='Price'/>
								<TextField label='Language'/>
								<TextField label='URL'/>
							</div>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleEvent.bind(this)}>Close</Button>
							<Button variant='contained' color='primary'>Submit</Button>
						</DialogActions>
					</div>
				</Dialog>
				<Button variant='contained' onClick={this.handleEvent.bind(this)}>
					Add API
				</Button>
			</div>
    )
  }
}

export default Add;