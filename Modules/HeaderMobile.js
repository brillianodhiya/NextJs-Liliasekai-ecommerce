import React from "react";
import Image from "next/image";
import { Divider, Dropdown, Layout, Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const HeaderMobile = () => {
  return (
    <div>
      <Layout.Sider
        breakpoint="xl"
        className="header-menus-mobile"
        collapsedWidth={0}
        defaultCollapsed={true}
        theme="light"
        style={{
          position: "fixed",
          height: "100%",
          zIndex: "100",
          background: "#fff",
        }}
      >
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "24px 0 0 0",
            background: "#000",
          }}
        >
          <Image
            src="/lilia_black.png"
            alt="LiLia Sekai"
            width="72px"
            height="72px"
          />
        </div>
        <Divider style={{ marginTop: 0 }} /> */}
        <Menu mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <a href="/"> Home </a>
          </Menu.Item>

          <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Menu">
            <Menu.Item key="5">
              <a href="/news">News</a>
            </Menu.Item>
            <Menu.Item key="6">
              <a href="/product">Product</a>
            </Menu.Item>
            <Menu.Item key="7">
              <a href="/gallery">Gallery</a>
            </Menu.Item>
            <Menu.Item key="8">
              <a href="/commision">Commision</a>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="2">
            <a href="/events"> ✨ Events </a>
          </Menu.Item>

          <Menu.Item key="3" icon={<MessageOutlined />}>
            <a href="/about-us"> About Us </a>
          </Menu.Item>
        </Menu>
      </Layout.Sider>

      <div
        className="header-menus header-menus-mobile"
        style={{ padding: "8px" }}
      >
        <ul>
          <li style={{ marginTop: "0", padding: 0 }}>
            <a href="/">
              <Image
                src="/lilia_black.png"
                alt="LiLia Sekai"
                width="72px"
                height="72px"
              />
            </a>
          </li>
          <li style={{ float: "right", marginTop: "20px", padding: 0 }}>
            <a href="/login">Login / Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMobile;
