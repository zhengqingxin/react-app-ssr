import React from 'react'
import bindRedux from 'bindRedux'
import layout from 'components/Layout'
import { connect } from 'react-redux'
import List from 'components/index/List'
import Search from 'components/index/Search'

// import request from 'utils/request'
// import config from 'utils/config'
@bindRedux
@connect(({ namespace2 }) => namespace2)
@layout
class Index extends React.Component {
  // static async getInitialProps({ store }) {
  //   return { list: [] }
  //   // const pre = Date.now()
  //   // const list = await request({
  //   //   url: config.api.getFavoriteByUser,
  //   //   data: { user: store.getState().home.user }
  //   // })
  //   // console.log('耗时：')
  //   // console.log(Date.now() - pre)
  //   // return { list }
  // }

  constructor() {
    super()
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    this.props.dispatch({ type: 'namespace2/getList', payload: { user: this.props.user } })
  }

  handleSearch(val) {
    if (!val) return
    this.props.dispatch({ type: 'namespace2/getList', payload: { user: val.trim() } })
  }

  render() {
    return (
      <main>
        <section className="container">
          <Search onSearch={this.handleSearch} defaultValue={this.props.user} />
          <List loading={this.props.loading} data={this.props.list || []} />
        </section>
      </main>
    )
  }
}

export default Index
