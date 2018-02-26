import PropTypes from 'prop-types'
import { List, Avatar, Spin } from 'antd'

const DataList = (props) => {
  return (
    <section>
      {/* <div className="label">关注列表</div> */}
      <Spin spinning={props.loading}>
        <List
          style={{ marginTop: 15 }}
          itemLayout="horizontal"
          dataSource={props.data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.owner.avatar_url} />}
                title={<a target="_blank" href={item.html_url}>{item.name}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Spin>
      <style jsx>{`
      .label{
        color:red;
        margin-top:30px;
      }
    `}</style>
    </section>
  )
}

DataList.propTypes = {
  data: PropTypes.array
}

DataList.defaultProps = {
  data: []
}

export default DataList
