import React from "react";
import Image from "next/image";
import { Button, Dropdown, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const Header = () => {
  const menud = (
    <Menu>
      <Menu.Item>
        <a
          rel="noopener noreferrer"
          href="/news"
          style={{ fontSize: "medium", padding: "12px 24px 12px 4px" }}
        >
          News
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          rel="noopener noreferrer"
          href="/product"
          style={{ fontSize: "medium", padding: "12px 24px 12px 4px" }}
        >
          Product
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          rel="noopener noreferrer"
          href="/gallery"
          style={{ fontSize: "medium", padding: "12px 24px 12px 4px" }}
        >
          Gallery
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          rel="noopener noreferrer"
          href="/commision"
          style={{ fontSize: "medium", padding: "12px 24px 12px 4px" }}
        >
          Commision
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="header-menus">
      <ul>
        <li>
          <a href="/">
            <Image
              src="/lilia_black.png"
              alt="LiLia Sekai"
              width="88px"
              height="88px"
            />
          </a>
        </li>
        <li className="active">
          <a href="/">
            <HomeOutlined /> Home
          </a>
        </li>
        <li>
          <Dropdown overlay={menud} trigger={["click", "hover"]}>
            <a onClick={() => console.log("CLICK MENU")}>Menu</a>
          </Dropdown>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li style={{ float: "right" }}>
          <a href="/login">Login / Register</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
