import { Button, Form, Input, Row, message, Col, Typography } from "antd";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import { useLoginAuth } from "src/hooks/useAuth";
import Dimonde from "../../assets/images/dimonde.jpg";

const SignIn = () => {
  const { mutate, isPending } = useLoginAuth();
  const onFinish = (values) => {
    console.log(values);
    mutate(values, {
      onSuccess: (response) => {
        Cookies.set("token", response.access_token);
        window.location.reload();
        message.success("Succes Login");
      },
      onError: (err) => {
        message.error(err.response.data.message);
      },
    });
  };

  return (
    <Row>
      <Col>
        <Typography.Title style={{ textAlign: "center", color: "white" }}>
          Sign In
        </Typography.Title>
        <div className="bg-white p-1 flex items-center  whitespace-nowrap text-center hover:bg-blue-600  rounded-lg my-5 text-black hover:text-white">
          <img src={Dimonde} alt={Dimonde} className="w-[70px] h-[70px] " />
          <p className="font-bold my-5">Dimonde</p>
        </div>

        <Form
          onFinish={onFinish}
          layout="vertical"
          style={{
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Tolong input email dong",
              },
              {
                type: "email",
                message: "email tidak valid",
              },
            ]}
          >
            <Input placeholder="Enter Your Email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Tolong input passowrd dong",
              },
            ]}
          >
            <Input.Password placeholder="Enter Your Password" />
          </Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <NavLink
              to="/landinghome"
              className="bg-red-500 p-2 px-3 rounded-md text-white"
              type="primary"
              htmlType="submit"
              loading={isPending}
            >
              Back
            </NavLink>

            <Button
              className="bg-blue-500 text-white"
              type="primary"
              htmlType="submit"
              loading={isPending}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default SignIn;
