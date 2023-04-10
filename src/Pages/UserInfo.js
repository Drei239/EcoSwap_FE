import React, { useContext } from "react";
import { Typography, Form, Button, Input, Row, Col, notification } from "antd";
import styled from "styled-components";
import background from "../Asset/bgSignup.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";

const InputStyled = styled(Input)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 40px;
`;

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

// const DatePickerStyled = styled(DatePicker)`
//   padding-top: 1rem;
//   padding-bottom: 1rem;
//   border-radius: 40px;
// `;

export default function UserInfo() {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.error({
      message: "đăng ký không thành công",
    });
  };

  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const onFinish = async (values) => {
    if (user === null) {
      openNotification();
    } else {
      const newProfile = {
        ...values,
        ...user,
        isAdmin: false,
      };
      setUser(newProfile);
      const name = newProfile.firstName + " " + newProfile.lastName;

      const data = {
        name: name,
        email: newProfile.email,
        password: newProfile.password,
        linkContact: newProfile.facebookLink,
        phoneNumber: newProfile.phoneNumber,
        address: newProfile.address,
      };
      console.log(user);
      await axios
        .post("http://localhost:3000/users/register", data)
        .then(function (response) {

          localStorage.setItem("data", JSON.stringify(response.data));
          alert("đăng ký thành công");
          console.log(localStorage.getItem("data"));
          navigate("/home");
        })
        .catch(function (error) {
          console.log(error);
          openNotification();
        });

    }
  };

  return (
    <WrapperStyled>
      {contextHolder}
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
            <Typography.Text>Step 2 of 2</Typography.Text>
            <Typography.Title style={{ marginTop: 0 }}>
              Create an account
            </Typography.Title>
            <div>
              <Row>
                <Col span={12}>
                  <Form.Item
                    label={
                      <Typography.Text strong>First name:</Typography.Text>
                    }
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your username! ",
                      },
                    ]}
                    style={{
                      display: "flex",
                    }}
                  >
                    <InputStyled placeholder="First name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={<Typography.Text strong>Last name:</Typography.Text>}
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your username! ",
                      },
                    ]}
                    style={{
                      display: "flex",
                    }}
                  >
                    <InputStyled placeholder="Last name" />
                  </Form.Item>
                </Col>
              </Row>
              {/* <Form.Item
                label={<Typography.Text strong>Date of birth:</Typography.Text>}
                name="dateOfBirth"
                rules={[
                  {
                    required: true,
                    message: "Please input your date of birth!",
                  },
                ]}
              >
                <DatePickerStyled placeholder="Date of birth" />
              </Form.Item> */}
              <Form.Item
                label={
                  <Typography.Text strong>Your phone number:</Typography.Text>
                }
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <InputStyled
                  // onChange={(e)=>{
                  //   const regex = new RegExp('^[0-9\\-\\+]{9,15}$');
                  //   console.log(regex.test(e.target.value));
                  // }}
                  placeholder="Your phone number"
                />
              </Form.Item>
              <Form.Item
                label={
                  <Typography.Text strong>Your facebook link:</Typography.Text>
                }
                name="facebookLink"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <InputStyled placeholder="https://www.facebook.com/yourusername" />
              </Form.Item>
              <Form.Item
                label={<Typography.Text strong>Your address:</Typography.Text>}
                name="address"
                rules={[
                  { required: true, message: "Please enter your address!" },
                ]}
              >
                <InputStyled placeholder="Your address" />
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
                >
                  <Typography.Text
                    style={{
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    Done
                  </Typography.Text>
                </Button>
                {/* <Button
                  style={{
                    borderRadius: "50px",
                    padding: "24px",
                    marginRight: "1rem",
                    display: "flex",
                    alignItems: "center",
                    float: "right",
                  }}
                  onClick={() => {}}
                >
                  <Typography.Text
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    Back
                  </Typography.Text>
                </Button> */}
              </Form.Item>
            </div>
          </Form>
        </Col>
      </Row>
    </WrapperStyled>
  );
}
