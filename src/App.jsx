import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props)
    console.log('Load constructor')
    this.state = {
      count: 0
    }
  }
  componentDidMount(){
    console.log('Load componentDidMount')
  }
  shouldComponentUpdate(){
    console.log('Load componentDidUpdate')
    return true
  }
  render() {
    console.log('Load render')
    return (
    <>
    <h1>Number is: {this.state.count}</h1>
    <button type='button' onClick={() => this.setState({count: this.state.count +1 })} >
      count {this.state.count}

    </button>
    <button type='button' onClick={() => this.setState({count: 0 })}>
      Reset
    </button>  
    </>
    )
  }
}
  class ChildComponent extends Component{
    constructor(props) {
      super(props)
  }
  render() {
    return <h3>{this.props.name}</h3>
  }
}
export default App 