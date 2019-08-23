import React, {Component} from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class ErrorMessage extends Component{
	state = {
		open: this.props.open
	}
	render() {
		return(
			<Snackbar 
				open={this.state.open}
				anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
				onClose={() => this.setState({open:false})}
				message={this.props.message}/>
		)
	}
}

export default ErrorMessage;