import React , {Component} from 'react';

class TargetDetails extends Component {

    componentDidMount() {
        const { target } = this.props.location;
        console.log('data', target);
        if (target) {
            console.log('data from target details page')
        } else {
            this.props.history.push('/home');
        }

    }

    render() {
        return (
            <div>This is a placeholder for details page</div>
        )
    }
}

export default TargetDetails;