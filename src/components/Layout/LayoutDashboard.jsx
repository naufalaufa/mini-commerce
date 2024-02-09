import PropTypes from "prop-types";
import { Layout, Menu, Typography } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { Navigate } from "react-router-dom";

const LayoutDashboard = (props) => {
  const children = props.children;

  const items = [
    {
      key: "dashboard",
      icon: <AppstoreOutlined />,
      label: <Typography.Text>Dashboard</Typography.Text>,
    },
    {
      key: "inventory",
      icon: <AppstoreOutlined />,
      label: (
        <Typography.Text onClick={() => <Navigate to="/inventory" />}>
          Inventory
        </Typography.Text>
      ),
    },
    {
      key: "Logout",
      label: (
        <Typography.Text>
          <Typography.Text onClick={() => <Navigate to="/signin" />}>
            Logout
          </Typography.Text>
        </Typography.Text>
      ),
    },
  ];

  return (
    <Layout>
      <Layout.Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu
          style={{ minHeight: "100vh" }}
          theme="light"
          mode="inline"
          items={items}
        />
      </Layout.Sider>
      <Layout
        style={{
          marginLeft: 200,
          background: "#fff",
        }}
      >
        <Layout.Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
            }}
          >
            {children}
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

LayoutDashboard.propTypes = {
  children: PropTypes.node,
};

export default LayoutDashboard;
