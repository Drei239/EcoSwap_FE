import { React, useState, useEffect, useContext } from "react";
import { Card, Button, Typography, Modal, Radio, Input, notification } from "antd";
import {
    SwapOutlined,
    EllipsisOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { AppContext } from "../Context/AppProvider";
import { async } from "q";


const ProductCard = ({ imageList, owner, itemName, description, id }) => {
    const [itemList, setItemList] = useState([]);
    const [request, setRequest] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRequestItemModalOpen, setIsRequestItemModalOpen] = useState(false);
    const [value, setValue] = useState(1);
    const [messageValue, setMessageValue] = useState(null);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const bearerToken = {
        headers: { Authorization: `Bearer ${(JSON.parse(localStorage.getItem('data'))).token}` }
    };


    const messageOnChange = (e) => {
        setMessageValue(e.target.value);
    }

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem('data'));
        axios.get(`http://localhost:3000/items/user/${id._id}`, { headers: { "Authorization": `Bearer ${id.token}` } }).then((data) => {
            if (data.data != null) {
                setItemList(data.data);
            }
        });
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setIsRequestItemModalOpen(false);
    };

    const showRequestItemModal = () => {
        setIsRequestItemModalOpen(true);
    }

    const sendRequest = async (values) => {
        // console.log("RECEIVE ITEM", id);
        // console.log("RECEIVE USER", owner);
        // console.log("REQUEST ITEM", value._id);
        // console.log("REQUEST USER", value.owner);
        // console.log(messageValue);

        const newRequest = {
            ...values,
            // userRequest: owner,
            productRequest: value._id,
            // userReceive: value.owner,
            productReceive: id,
            message: messageValue
        }
        setRequest(newRequest);

        const data = {
            productRequest: newRequest.productRequest,
            productReceive: newRequest.productReceive,
            message: newRequest.message,
        };
        axios
            .post("http://localhost:3000/request/", data, bearerToken,
            ).then(function (response) {
                alert("Request is sent successfully!");
            }).catch(function (error) {
                alert("Request is sent failed!");
            });
    }

    return (
        <Card
            style={{
                margin: "2rem",
                width: 300,
                borderRadius: "24px",
            }}
            cover={
                <img
                    alt="event"
                    style={{
                        borderBottomLeftRadius: "24px",
                        borderBottomRightRadius: "24px",
                    }}
                    src={imageList[0]}
                />
            }
            actions={[
                <Button icon={<SwapOutlined key="Trade" />} style={{
                    color: "#EF8450"
                }}
                    onClick={showRequestItemModal
                        // () => { navigate(`/item-info/${uuid}`) }
                    }
                >
                    Trade
                </Button>,
                <Button icon={<EllipsisOutlined key="More" />} onClick={showModal}>
                    {" "}
                    More{" "}
                </Button>,
            ]}
        >
            <Card.Meta
                // avatar={<Avatar src={userData.photoURL} />}
                title={itemName}
            // description={userData.lastName + " " + userData.firstName}
            />
            <Modal
                title="Product Name"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div>
                    <Typography.Title level={3}>{itemName}</Typography.Title>
                    <Typography.Title level={4}>Description</Typography.Title>
                    <p>{description}</p>
                    {/* <p>
                        <Typography.Title level={5}>Weight</Typography.Title>
                        {weight}
                    </p> */}
                    <p>
                        <Typography.Title level={5}>Gallery</Typography.Title>
                        {imageList.map((image) =>
                            <img
                                // key={uuid}
                                alt="event"
                                style={{
                                    borderRadius: "24px",
                                }}
                                src={image}
                            />
                        )}
                    </p>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignContent: "center",
                    }}
                >
                </div>
            </Modal>

            <Modal title="Request Item Modal"
                open={isRequestItemModalOpen}
                onOk={sendRequest}
                onCancel={handleCancel}>
                {itemList.map((item) => (
                    <div>
                        <Radio.Group onChange={onChange} value={value}>
                            <img
                                alt="request-item"
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    margin: "5px",
                                    borderRadius: "20px"
                                }}
                                src={item.imageList[0]}
                            />
                            <Radio value={item}>{item.itemName}</Radio>
                        </Radio.Group>

                    </div>
                )
                )}
                <Input value={messageValue} onChange={messageOnChange} placeholder="Request message?" />
            </Modal>
        </Card>
    );
};

export default ProductCard;
