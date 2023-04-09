import React, { useContext, useState } from "react";
import { Modal, Form, Input, Typography, Button, Upload, notification, Select } from "antd";
import { AppContext } from "../Context/AppProvider";
import styled from "styled-components";
import InputImage from "../asset/InputImage.png";
import ImgCrop from "antd-img-crop";
import { addDocument } from "../Firebase/services";
import { getImageURL } from "../Firebase/getImageURL";
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { storage } from "../Firebase/config";


const ModalStyled = styled(Modal)`
  .ant-modal-body {
    height: 100%;
  }
`;

const UploadStyled = styled(Upload)`
  display: ${(props) => {
    if (!props.fileLength) {
      return "none";
    }
    return "";
  }} !important;
`;

const { Dragger } = Upload;

export default function AddModal() {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.success({
      message: 'Item is added successfully !'
    })
  }
  const currentUserUid = JSON.parse(localStorage.getItem('data'))?.uid;
  const { addModalVisible, setAddModalVisible } = useContext(AppContext);
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onFinish = (values) => {
    setAddModalVisible(false);
    const imageURL = getImageURL(fileList);
    openNotification()
    imageURL.then((data) => {
      addDocument('items', {
        ...values,
        imageList: data,
        itemOwner: currentUserUid
      }).then(()=>{
        window.location.reload(false);
      })
      
    })
  }
  return (
    <ModalStyled
      width="60vw"
      height="100vh"
      closable={false}
      open={addModalVisible}
      footer={null}
      onCancel={() => {
        setAddModalVisible(false);
      }}
    >
      {contextHolder}
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "100%",
        alignItems: "center"
      }}>
        <ImgCrop>
          <Dragger
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              display: fileList.length === 0 ? "" : "none",
            }}
            customRequest={({ file, onSuccess }) => {
              setTimeout(() => {
                onSuccess("ok");
              }, 0);
            }}
            fileList={fileList}
            onChange={onChange}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={InputImage} alt="input" />
              <Typography.Title>Drag your photo here</Typography.Title>
              <Typography.Text>or</Typography.Text>
              <Button
                style={{
                  backgroundColor: "#10393B",
                  marginTop: "1rem",
                  border: "#10393B",
                  width: "80%",
                  borderRadius: "50px",
                  color: "white",
                  marginBottom: "1rem",
                }}
              >
                Select from your computer
              </Button>
            </div>
          </Dragger>
        </ImgCrop>
        <ImgCrop>
          <UploadStyled
            fileLength={fileList.length}
            style={{
              display: fileList.length === 0 ? "none" : "",
            }}
            customRequest={({ file, onSuccess }) => {
              setTimeout(() => {
                onSuccess("ok");
              }, 0);
            }}
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
          >
            {fileList.length < 5 && "+ Upload"}
          </UploadStyled>
        </ImgCrop>
        <Form
          layout="vertical"
          onFinish={onFinish}
          style={{
            alignSelf: "right",
          }}
        >
          <Form.Item
            name="itemName"
            label={<Typography.Text>Type of item</Typography.Text>}
            rules={[
              {
                required: true,
                message: 'Please input your item name',
              },
            ]}
          >
            <Input placeholder="Type of item..." />
          </Form.Item>
          <Form.Item
            name="description"
            label={
              <Typography.Text>
                Short description for your item
              </Typography.Text>
            }
            rules={[
              {
                required: true,
                message: 'Please input description',
              },
            ]}
          >
            <Input.TextArea placeholder="Description ..." />
          </Form.Item>
          <Form.Item label={<Typography.Text>Weight</Typography.Text>}
            name="weight"
            rules={[
              {
                required: true,
                message: 'Please input weight',
              },
            ]}>
            <Input placeholder="Weight of item" suffix="kg" />
          </Form.Item>
          <Form.Item label={<Typography.Text>This item is for trade or donation</Typography.Text>}
            name="isTrade"
            rules={[
              {
                required: true,
                message: 'Please select option',
              },
            ]}>
            <Select 
              placeholder='Trade or Donate'
              options={[
                {
                  value: true,
                  label: 'Trade'
                },
                {
                  value: false,
                  label: 'Donate'
                }
              ]}
              onChange={(value)=>{
                console.log(value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </ModalStyled>
  );
}

// chua xong submit
