import React, { useContext, useEffect, useState } from "react";
import { Layout, Row, Col, Typography } from "antd";
import { AppContext } from "../Context/AppProvider";
import NavBar from "../Components/NavBar";
import ProfileCard from "../Components/ProfileCard";
import ProfileMenu from "../Components/ProfileMenu";
import EndBar from "../Components/EndBar";
import { useParams } from 'react-router-dom';
import axios from "axios"
const { Content } = Layout;


export default function Profile() {
  const { uid } = useParams();
  const [isGuest, setIsGuest] = useState(false);
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('data'));
    axios.get(`http://localhost:3000/users/profile`, { headers: { "Authorization": `Bearer ${id.token}` } }).then(function (response) {
      setProfileData(response.data);
      setIsGuest(uid!==JSON.parse(localStorage.getItem('data'))._id);
    })
      .catch(function (error) {
        console.log(error);
      });

    // getAccount('users', {
    //   fieldName: 'uid',
    //   operator: '==',
    //   compareValue: uid
    // }).then((data)=>{
    //   setProfileData(data[0]);
    //   console.log(uid!==JSON.parse(localStorage.getItem('data')).uid)
    //   setIsGuest(uid!==JSON.parse(localStorage.getItem('data')).uid);
    // })
  }, [uid]);
  const { width, commonBreakPoint } = useContext(AppContext);
  const windowWidth = width;
  return (
    <Layout
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: "white",
        maxWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <Typography.Title
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#10393B",
          margin: 0,
          padding: "2rem 0 4rem",
          color: "white",
          borderRadius: "0 0 30px 30px",
        }}
      >
        {" "}
        PROFILE{" "}
      </Typography.Title>
      <Content>
        {(windowWidth < commonBreakPoint[2]) ?
          <div style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
          }}>
            <ProfileCard profileData={profileData} isGuest={isGuest} />
            <ProfileMenu style={{
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center"
            }} />
          </div>
          :
          (
            <Row>
              <Col span={2}></Col>
              <Col span={6}>
                <ProfileCard profileData={profileData} isGuest={isGuest} />
              </Col>
              <Col span={16}>
                <ProfileMenu profileData={profileData} isGuest={isGuest} />
              </Col>
            </Row>)
        }
      </Content>
      <EndBar />
    </Layout>
  );
}
