import { Row, Col } from 'react-bootstrap';

export function Home() {
  return (
    <Row>
      <Col>
        <h1>Home</h1>
        <p>
          <a href="/success">Success</a>
        </p>
        <p>
          <a href="/cancel">Cancel</a>
        </p>
      </Col>
    </Row>
  )
}