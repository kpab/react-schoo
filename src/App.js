import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Paul'
    }
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="John">John</option>
          <option value="Paul">Paul</option>
        </select>
        <p>{this.state.value}</p>
      </>
    )
  }
}

export default App;
