import { React } from "react";
import { Card, Button } from "antd";
import Typography from "antd/es/typography/Typography";
import { useNavigate } from "react-router";

const EventCard = ({ eventDescription, eventItems, eventTitle, imageList }) => {
    const navigate = useNavigate();
    return (
        <Card
            hoverable
            style={{
                margin: "1.2rem",
                width: 300,
                height: 650,
            }}
            cover={
                <img
                    alt="event"
                    style={{
                        borderBottomLeftRadius: "24px",
                        borderBottomRightRadius: "24px",
                        width: 300,
                        height: 300,
                    }}
                    src={imageList[0]}
                />
            }
        >
            <Card.Meta
                title={eventTitle}
                description={
                    <div>
                        <Typography.Text type="secondary"> Updated in March 13 </Typography.Text>
                        <br />
                        <div style={{
                            padding: "5px",
                            paddingBottom: "10px"
                        }}>
                            {eventDescription.toString().slice(0, 250)}...
                        </div>
                        <br />
                        <br />
                        <Button onClick={() => {
                            // navigate(`/donate-info/${uuid}`)
                            navigate('/home');
                        }} style={{
                            color: "#EF8450",
                            fontStyle: "bold"
                        }}> Donate now </Button>
                    </div>

                }
            />
        </Card>
    );
};

export default EventCard;
