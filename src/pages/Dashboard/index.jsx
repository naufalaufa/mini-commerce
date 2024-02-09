import { Avatar, Col, Input, Row, Table, Typography } from "antd";
import { useState } from "react";
import { PageError } from "src/components";
import { useZodiak } from "src/hooks/useProduct";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const params = {
    name: search,
  };

  const { data, isLoading, error } = useZodiak(params);

  const columns = [
    {
      title: "Id",
      key: "id",
      render: (record) => <Typography.Text>{record.id}</Typography.Text>,
    },
    {
      title: "Name",
      key: "name",
      render: (record) => <Typography.Text>{record.name}</Typography.Text>,
    },
    {
      title: "Avatar",
      key: "avatar",
      render: (record) => (
        <Avatar src={record.avatar} size="default" alt={record.avatar} />
      ),
    },
  ];

  if (error) return <PageError />;

  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Input
          placeholder="Search...."
          onChange={(e) => setSearch(e.target.value)}
        />
      </Col>
      <Col span={24}>
        <Table dataSource={data || []} loading={isLoading} columns={columns} />
      </Col>
    </Row>
  );
};

export default Dashboard;
