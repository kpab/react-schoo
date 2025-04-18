import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
  }

  handleChage = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <>
        <textarea value={this.state.text} onChange={this.handleChage} />
        <p>{this.state.text}</p>
      </>
    )
  }
}

export default App;
