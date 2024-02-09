import { Col, Result, Row } from "antd";

const PageNotFound = () => {
  return (
    <Row align="middle" justify="center" style={{ minHeight: "100vh" }}>
      <Col>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
        />
      </Col>
    </Row>
  );
};

export default PageNotFound;
