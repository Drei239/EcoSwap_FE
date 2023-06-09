import React, { useState, useContext, useEffect } from "react";
import { Menu, Space, Button } from "antd";
import styled from "styled-components";
import ItemAddButton from "../Asset/ItemAddButton.png";
// import EventImage from "../asset/EventImage.png";
import { AppContext } from "../Context/AppProvider";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddModal from "./AddModal";

const items = [
  {
    label: "Items",
    key: "1",
  },
  {
    label: "Saved Events",
    key: "2",
  },
];

const ImageStyled = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 24px;
  margin: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const ImageAddButtonStyled = styled.img`
  padding: 40px 40px;
  border: solid;
  border-radius: 24px;
  margin: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const MenuStyled = styled(Menu)`
  background-color: white;
  .ant-menu-item {
    margin: 1rem;
    border-radius: 300px;
    color: #10393b;
  }
  .ant-menu-item-selected {
    margin: 1rem;
    background-color: #10393b !important;
    color: white !important;
    border-radius: 30px;
  }
`;


export default function ProfileMenu(props) {
  const { profileData, isGuest } = props;
  const { uid } = useParams();
  const [page, setPage] = useState("1");
  const [itemList, setItemList] = useState([]);
  const { addModalVisible, setAddModalVisible, setEventModalVisible, setProfileData } =
    useContext(AppContext);
  const isAdmin = JSON.parse(localStorage.getItem("data")).isAdmin;
  const handleAdd = () => {
    setAddModalVisible(true);
  };
  const handleChange = (e) => {
    setPage(e.key);
  };

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('data'));
    axios.get(`http://localhost:3000/items/user/${uid}`,{ headers: {"Authorization" : `Bearer ${id.token}`} }).then((data) => {
      if (data.data != null) {
        setItemList(data.data);
      }
    });
  }, [profileData]);
  return (
    <div>
      <AddModal />
      <MenuStyled
        items={items}
        mode="horizontal"
        theme="dark"
        defaultSelectedKeys={["1"]}
        onClick={handleChange}
      />
      {page === "1" ? (
        <Space
          size={[8, 16]}
          wrap
          style={{
            marginLeft: "2rem",
          }}
        >
          {!isGuest ? (
            <ImageAddButtonStyled
              src={ItemAddButton}
              alt="item"
              onClick={handleAdd}
            />
          ) : (
            ""
          )}
          {itemList.map((i) => {
            return <ImageStyled key={i.uuid} src={i.imageList[0]} alt="item" />;
          })}
        </Space>
      ) : (
        <Space wrap>
          {isAdmin ? (
            <Button
              onClick={() => {
                setEventModalVisible(true);
              }}
            >
              Only Admin can use this button
            </Button>
          ) : (
            ""
          )}
        </Space>
      )}
    </div>
  );
}
