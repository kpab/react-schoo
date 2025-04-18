import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello'
    }
  }

  handleChage = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.text} onChange={this.handleChage} />
        <p>{this.state.text.split('').reverse().join('')}</p>
      </>
    )
  }
}

export default App;
