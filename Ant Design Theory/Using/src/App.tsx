import {
  Alert,
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Progress,
  Select,
  Spin,
  Table,
  TimePicker,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";

interface FormValues {
  username: string;
  password: string;
}

interface DataTable {
  name: string;
  age: number;
  address: string;
  key: string;
}

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const fruits: string[] = ["Apple", "Banana", "Orange", "Grapes"];

  const handleOnSubmit = (value: FormValues) => {
    console.log("Form submitted", value);

    // Notify
    setTimeout(() => {
      setShowAlert(true);
      message.success("Form submitted successfully");
    }, 2000);
  };

  const dataTable = [
    {
      name: "John Doe",
      age: 32,
      address: "10 Downing Street",
      key: "1",
    },
    {
      name: "Black Widow",
      age: 22,
      address: "Hall of Justice",
      key: "2",
    },
    {
      name: "Mary Jane",
      age: 12,
      address: "Wayne Manor",
      key: "3",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "key",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
      sorter: (a: DataTable, b: DataTable) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "key",
    },
    {
      title: "Graduated?",
      key: "key",
      render: (payload: DataTable) => {
        return <p>{payload.age > 20 ? "True" : "False"}</p>;
      },
    },
  ];

  return (
    <div className="App">
      <header style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
        <div className="Button">
          <Button type="primary">My first Button</Button>
        </div>

        <div className="Input">
          <Input
            placeholder="Name"
            allowClear
            maxLength={10}
            prefix={<UserOutlined />}
          ></Input>
        </div>
        <div className="Input">
          <Input.Search
            placeholder="Name"
            maxLength={10}
            prefix={<UserOutlined />}
          ></Input.Search>
        </div>

        <div className="Select">
          <p>Which is your favorite fruit?</p>
          <Select placeholder="Select fruit" style={{ width: "50%" }}>
            {fruits.map((fruit) => (
              <Select.Option key={fruit} value={fruit}>
                {fruit}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div className="Select">
          <p>Which is your favorite fruits?</p>
          <Select
            mode="multiple"
            maxTagCount={2}
            placeholder="Select fruit"
            style={{ width: "100%" }}
          >
            {fruits.map((fruit) => (
              <Select.Option key={fruit} value={fruit}>
                {fruit}
              </Select.Option>
            ))}
          </Select>
        </div>

        <div className="Form">
          {showAlert && (
            <Alert
              message="Form submitted successfully"
              type="success"
              showIcon
              closable
            />
          )}

          <Form layout="vertical" onFinish={handleOnSubmit}>
            <Form.Item label="User name" name="username">
              <Input placeholder="User name"></Input>
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password placeholder="Password"></Input.Password>
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </header>

      <div className="Table">
        <Table dataSource={dataTable} columns={columns}></Table>
      </div>

      <div className="DatePicker">
        <DatePicker picker="date" />
      </div>
      <div className="DatePicker">
        <DatePicker.RangePicker picker="date" />
      </div>

      <div className="TimePicker">
        <TimePicker />
      </div>

      <div className="Loading">
        <Spin spinning={loading} />
        <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>
      </div>

      <div className="Progress">
        <Progress type="circle" percent={33} strokeColor="red" />
      </div>
    </div>
  );
}

export default App;
