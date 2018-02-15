import React from 'react'
import bindRedux from 'bindRedux'
import { connect } from 'react-redux'
import Menu from 'components/index/Menu'
import List from 'components/index/List'
import Search from 'components/index/Search'
import stylesheet from '../styles/index/index.less'
import request from 'utils/request'
import config from 'utils/config'

@bindRedux
@connect(({ home }) => home)
class Index extends React.Component {

  static async getInitialProps({ store }) {
    const list = await request({
      url: config.api.getFavoriteByUser,
      data: {user:store.getState().home.user}
    })
    return {list}
  }

  handleSearch(val){
    this.props.dispatch({type:'GET_LIST_ASYNC',payload:{user:val.trim()}})
  }

  render() {
    return (
      <main>
        <Menu />
        <section className="container">
          <Search onSearch={this.handleSearch.bind(this)}/>
          <List data={this.props.list || []} />
        </section>

        <style jsx global>{stylesheet}</style>
        <style jsx>{`
          .container{
            width:1150px;
            margin:0 auto;
          }
        `}
        </style>

      </main>
    )
  }
}

export default Index