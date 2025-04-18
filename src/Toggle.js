import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOn: true };
    }

    handleClick = () => {
        this.setState({ isOn: !this.state.isOn })
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;
