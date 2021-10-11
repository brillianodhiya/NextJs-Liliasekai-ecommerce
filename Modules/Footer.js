import React from "react";
import { Col, Row, Typography } from "antd";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Row style={{ width: "100%" }}>
          <Col xl={7} md={24} sm={24} xs={24}>
            <Typography.Title level={3} style={{ color: "#fff" }}>
              LiLia Universe
            </Typography.Title>
            <Typography.Paragraph style={{ color: "#fff" }}>
              In LiLia Universe, it contains lots of stories and also many
              characters who can get acquainted with you. And here we have a
              shop for you.
            </Typography.Paragraph>
            <Typography.Paragraph style={{ color: "#fff" }}>
              ~ ♥ LiLia is your friend
            </Typography.Paragraph>
          </Col>
          <Col
            xl={{
              span: 4,
              offset: 1,
            }}
            md={{
              span: 12,
              offset: 0,
            }}
            sm={{
              span: 12,
              offset: 0,
            }}
            xs={{
              span: 24,
              offset: 0,
            }}
          >
            <ul className="menu-footer">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/news">News</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/product">Product</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
            </ul>
          </Col>
          <Col
            xl={{
              span: 8,
              offset: 0,
            }}
            md={{
              span: 12,
              offset: 0,
            }}
            sm={{
              span: 12,
              offset: 0,
            }}
            xs={{
              span: 24,
              offset: 0,
            }}
          >
            <ul className="menu-footer">
              <li>
                <a href="/story">Story</a>
              </li>
              <li>
                <a href="/characters">Characters</a>
              </li>
              <li>
                <a href="/animation">Animation</a>
              </li>
              <li>
                <a href="/design">Design</a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="credit">© 2021 LiLia Sekai Team • Made by Love •</div>
    </footer>
  );
};

export default Footer;
