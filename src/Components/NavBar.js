import { Drawer, Menu, Layout, Row, Col, Input, Space, Image } from "antd";
import {
    LoginOutlined, QuestionCircleOutlined, HomeOutlined,
    SwapOutlined, MenuOutlined, PlusCircleOutlined
} from "@ant-design/icons"
import { useState } from "react";
import logoBlack from "../Asset/reCollectBlack.png";
const { Search } = Input;

export default function NavBar() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header style={{ height: '100vh' }}>
            <div className="menuIcon">
                <MenuOutlined onClick={() => {
                    setOpenMenu(true);
                }} />
            </div>
            <span className="headerMenu">
                <AppMenu />
            </span>
            <Drawer
                placement="left" open={openMenu}
                onClose={() => {
                    setOpenMenu(false);
                }}
                closable={false}>
                <AppMenu isInline />

            </Drawer>
        </header>
    )
}

function AppMenu({ isInline = false }) {
    const onSearch = (value) => console.log(value);
    return (

        <Menu className="Navbar-Menu"
            style={{ fontSize: 24 }}
            mode={isInline ? "inline" : "horizontal"}
            items={[
                {
                    label: (<Image
                        width={200}
                        height={30}
                        src={logoBlack}
                    />),
                    key: "Logo"
                },
                {
                    label: "Home",
                    key: "Home",
                    icon: <HomeOutlined />
                },
                {
                    label: "Bartering",
                    key: "Bartering",
                    icon: <SwapOutlined />,
                }, {
                    label: "About Us",
                    key: "About",
                    icon: <QuestionCircleOutlined />
                },

                {
                    label: (<Search size="large" placeholder="Input Search Text" allowClear onSearch={onSearch} style={{ width: 300 }} />),
                    key: "Seach"
                },
                {
                    label: (
                        <a href="/signin" rel="noopener noreferrer">
                            Login
                        </a>
                    ),
                    key: "Login",
                    icon: <LoginOutlined />
                },
                {
                    label: (<a href="/signup" rel="noopener noreferrer">
                        Register
                    </a>),
                    key: "Register",
                    icon: <PlusCircleOutlined />
                }
            ]}>
        </Menu>
    )
}