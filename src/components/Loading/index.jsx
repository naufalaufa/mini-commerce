import { Col, Spin } from "antd";

const Loading = () => {
  return (
    <Col
      span={24}
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spin size="large" />
    </Col>
  );
};

export default Loading;
