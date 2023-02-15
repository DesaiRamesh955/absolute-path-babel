import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Signin.module.css";
const Signin = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { username, password } = values;
    if (username === "admin" && password === "admin") {
      navigate("/dashboard");
    }else{
      alert("Invalid username or password")
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Item } = Form;
  return (
    <div className={styles.signinContainer}>
      <Form
        className={styles.signinForm}
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Item>

        <Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Item>

        <Item>
          <Button type="primary" htmlType="submit">
            Signin
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default Signin;
