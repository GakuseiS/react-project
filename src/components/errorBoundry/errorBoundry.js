import React from 'react';
import Error from '../error';

class ErrorBoundry extends React.Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }
    render() {
        const {error} = this.state;

        if(error) {
            return <Error />
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundry;