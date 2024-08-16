import { Avatar, Button, Flex, List, Typography } from "antd";
import React from "react";

const data = [
  {
    name: "Thang",
    orderTime: 1,
  },
  {
    name: "Thang",
    orderTime: 2,
  },
  {
    name: "Thang",
    orderTime: 3,
  },
  {
    name: "Thang",
    orderTime: 4,
  },
  {
    name: "Thang",
    orderTime: 5,
  },
];

const Activity = () => {
  return (
    <Flex vertical gap="small">
      <Flex>
        <Typography.Title level={3} strong className="primary--color">
          Recent Activity
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>

      <List
        pagination
        dataSource={data}
        renderItem={(user, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<a href="#">{user.name}</a>}
              description="Orderd a new plaint"
            ></List.Item.Meta>
            <span className="gray--color">
              {user.orderTime} {user.orderTime === 1 ? "day ago" : "days ago"}
            </span>
          </List.Item>
        )}
      />
    </Flex>
  );
};

export default Activity;
