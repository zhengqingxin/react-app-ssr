import { Input, Row, Col } from 'antd'

const Search = Input.Search

export default (props) => {
  return (
    <Row>
      <Col span={6}>
        <Search {...props} placeholder="请输入用户名" />
      </Col>
    </Row>
  )
}
