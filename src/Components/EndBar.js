import React from "react";
import { Typography, Layout } from "antd";
import LogoIcon from "../icons/LogoIcon";
import { GoogleOutlined, FacebookOutlined, TrademarkOutlined, PhoneOutlined } from "@ant-design/icons"

const { Footer } = Layout;

export default function EndBar(props) {
  const { color } = props;
  return (
    <Footer
      style={{
        backgroundColor: color === "white" ? "white" : "#10393B",
        // color: "white"
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        <div style={{
          flex: "60%",
        }}>
          <LogoIcon
            color={color === "white" ? "black" : "white"}
            style={{
              marginLeft: "0rem",
            }}
          />
          <Typography.Paragraph
            italic
            code
            style={{
              color: color === "white" ? "black" : "white",
              fontSize: "1.2em",
              marginTop: "10px",
            }}
          >
            reduce - reuse - reCollect
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{
              color: color === "white" ? "black" : "white",
              marginTop: "10px",
            }}
          >
            Pham Tri Nhan (Team Lead)
            <br />
            Vo Van Luan (Developer)
            <br />
            Nguyen Kieu Bao Khanh (Developer)
            <br />
            Le Ba Tan (UI/UX Designer)
          </Typography.Paragraph>
        </div>
        <div style={{
          flex: "39%",
          margin: "5px",
          marginLeft: "0px"
        }}>
          <Typography.Title
            level={2}
            style={{
              margin: 0,
              color: color === "white" ? "black" : "white",
            }}
          >
            Contact us
          </Typography.Title>
          <div>
            <Typography.Text
              italic
              style={{
                color: color === "white" ? "black" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <GoogleOutlined style={{
                color: color === "white" ? "black" : "white",
                fontSize: "15px",
                padding: "2px"
              }} />
              trinhanpham2801@gmail.com - (Pham Tri Nhan)
            </Typography.Text>
          </div>
          <div>
            <Typography.Text
              italic
              style={{
                color: color === "white" ? "black" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FacebookOutlined style={{
                color: color === "white" ? "black" : "white",
                fontSize: "15px",
                padding: "5px"
              }} />
              <a href="https://www.facebook.com/nhan.phamtri2801"> Pham Tri Nhan </a>
            </Typography.Text>
          </div>
          <div>
            <Typography.Text
              style={{
                color: color === "white" ? "black" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <PhoneOutlined style={{
                color: color === "white" ? "black" : "white",
                fontSize: "15px",
                padding: "5px"
              }}/>
              (+84)938156153 - Nguyen Kieu Bao Khanh
            </Typography.Text>
          </div>
        </div>
      </div>
      <div style={{
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        textAlign: "center",
        paddingTop: "30px"
      }}>
        <Typography.Text type="secondary" italic style={{
          color: color === "white" ? "black" : "white",
        }}>
          <TrademarkOutlined /> reCollect - GDSC Hackathon 2023
        </Typography.Text>
      </div>
    </Footer>
  );
}
