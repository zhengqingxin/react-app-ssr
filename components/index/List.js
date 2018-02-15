import { connect } from 'react-redux'
import {Input,Button,Row,Col,List,Avatar} from 'antd'
const Search = Input.Search

const Searcher = (props)=>{
  const handleClick = ()=>{
    console.log(Button);
  }
  return (
    <section>
      <div className="label">这是一个列表</div>
      <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a target="_blank" href={item.html_url}>{item.name}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    <style jsx>{`
      .label{
        color:red;
        margin-top:30px;
      }
    `}</style>
    </section>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: () => {
      dispatch({ type: 'ADD' })
    }
  }
}
const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(Searcher)