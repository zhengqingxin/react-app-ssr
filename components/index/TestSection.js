import React from 'react'

class TestSection extends React.Component {

  componentDidMount() {
    // this.timer = this.props.startClock()
  }

  componentWillUnmount() {
    // clearInterval(this.timer)
  }

  handleAdd(){
    console.log(this.props)
    this.props.addCount();
  }

  render() {
    return (
      <div>
        <p>count:{this.props.count}</p>
        <button onClick={this.handleAdd.bind(this)}>add</button>
      </div>
    )
  }
}

export default TestSection