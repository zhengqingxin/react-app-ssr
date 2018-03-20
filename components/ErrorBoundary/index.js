import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorMsg: error.message })
    // 在这里可以做异常的上报
    // eslint-disable-next-line    
    console.log(error.message)
    // eslint-disable-next-line    
    console.log(info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>
            {this.state.errorMsg}
          </p>
        </div>
      )
    }
    return this.props.children
  }
}