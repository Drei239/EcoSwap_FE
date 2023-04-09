import { React, useState, useEffect } from "react";
import { Card, Button, Avatar, Typography, Modal } from "antd";
import {
    SwapOutlined,
    EllipsisOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductCard = ({ imageList, owner, itemName, description }) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // getAccount("users", {
        //     fieldName: "uid",
        //     operator: "==",
        //     compareValue: itemOwner
        // }).then((userData) => {
        //     setUserData(userData[0]);
        // })
        // axios.get('http://localhost:3000/users/all').then(({ data }) => {
        //     console.log(data);
        //     setUsers(data);
        // });
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

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
                    onClick={() => {
                        // navigate(`/item-info/${uuid}`)
                    }
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
        </Card>
    );
};

export default ProductCard;
