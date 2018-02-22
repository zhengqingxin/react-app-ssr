import { Input, Row, Col } from 'antd'

const Search = Input.Search

export default ({ onSearch }) => {
  return (
    <Row>
      <Col span={6}>
        <Search onSearch={onSearch} placeholder="请输入用户名" />
      </Col>
    </Row>
  )
}
