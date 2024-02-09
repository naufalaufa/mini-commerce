import { Col, Result, Row } from "antd";

const PageError = () => {
  return (
    <Row align="middle" justify="center" style={{ minHeight: "100vh" }}>
      <Col>
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
        />
      </Col>
    </Row>
  );
};

export default PageError;
