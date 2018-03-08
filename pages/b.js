import React from 'react'
import layout from 'components/Layout'

@layout
export default class B extends React.Component {
  componentDidMount() {
    throw new Error('this is a test error')
  }

  render() {
    return <div>b</div>
  }
}