import React from "react";
import { Button,Form, Input } from "antd";
import styles from "./UserData.module.css";

const Userdata = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Item } = Form;
  return (
    <div>
      <Form
        className={styles.signinForm}
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Item
          label="First Name"
          name="firstname"
          rules={[
            {
              required: true,
              message: "Please input your firstname!",
            },
          ]}
        >
          <Input />
        </Item>

        <Item
          label="last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input />
        </Item>

        <Item>
          <Button type="primary" htmlType="submit">
            Add user
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default Userdata;
