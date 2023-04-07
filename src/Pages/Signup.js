import React, { useContext } from "react";
import { Button, Form, Input, Typography, Row, Col } from "antd";
import styled from "styled-components";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import GoogleIcon from "../icons/GoogleIcon";
import background from "../Asset/bgSignup.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const WrapperStyled = styled.div`
  margin: 0;
  padding: 0;
  min-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const InputStyled = styled(Input)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 40px;
`;

const InputPasswordStyled = styled(Input.Password)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 40px;
`;

export default function Signup() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmailSignup = async (email, password) => {
    try {
      setUser({
        email: email,
        password: password,
      });
      navigate("/user-info");
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish = (values) => {
    const { email, password } = values;
    handleEmailSignup(email, password);
  };

  return (
    <WrapperStyled>
      <Row>
        <Col span={12}></Col>
        <Col span={12}>
          <Form
            name="normal-login"
            style={{
              width: "500px",
              height: "90vh",
              backgroundColor: "white",
              padding: "1.5rem 2.5rem 6rem 2.5rem",
              borderRadius: "24px",
            }}
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Typography.Text>Step 1 of 2</Typography.Text>
            <Typography.Title style={{ marginTop: 0 }}>
              Create an account
            </Typography.Title>
            <div>
              <div
                style={{
                  width: "100%",
                  height: "20px",
                  borderBottom: "1px solid black",
                  textAlign: "center",
                  clear: "right",
                  paddingTop: "1rem",
                  marginBottom: "2rem",
                  padding: 0,
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    backgroundColor: "#F3F5F6",
                    padding: "0 10px",
                  }}
                >
                  Or
                </span>
              </div>
              <Form.Item
                label={<Typography.Text strong>Email:</Typography.Text>}
                name="email"
                rules={[
                  { required: true, message: "Please enter your email! " },
                  { type: "email" },
                ]}
              >
                <InputStyled
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                label={<Typography.Text strong>Password:</Typography.Text>}
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <InputPasswordStyled
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                style={{
                  position: "relative",
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    borderRadius: "50px",
                    padding: "24px",
                    display: "flex",
                    alignItems: "center",
                    float: "right",
                    backgroundColor: "#10393B",
                  }}
                  onClick={() => {}}
                >
                  <Typography.Text
                    style={{
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    Continue
                  </Typography.Text>
                </Button>
              </Form.Item>
              <Form.Item>
                <Typography.Text>Already have an account? </Typography.Text>
                <a href="/signin" style={{ textDecoration: "underline" }}>
                  Sign in
                </a>
              </Form.Item>
            </div>
          </Form>
        </Col>
      </Row>
    </WrapperStyled>
  );
}
