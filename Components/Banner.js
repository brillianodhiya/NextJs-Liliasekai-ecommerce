import {
  Menu,
  Col,
  Dropdown,
  Input,
  Row,
  Typography,
  Tooltip,
  Space,
  Divider,
} from "antd";
import React from "react";
import { SearchOutlined, createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2873252_66oddxx9eao.js",
});

const Banner = () => {
  const [searchText, setSearchText] = React.useState("");

  // default search belum
  return (
    <div
      className="banner-lilia"
      style={{
        background: "url(/background-banner.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "20px 12px",
      }}
    >
      <Row>
        <Col
          xl={{
            span: 7,
            offset: 1,
          }}
          md={{
            span: 16,
            offset: 1,
          }}
          sm={{
            span: 23,
            offset: 1,
          }}
          xs={{
            span: 23,
            offset: 1,
          }}
          style={{
            textAlign: "center",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="title-banner"
            style={{ textAlign: "left", position: "relative" }}
          >
            <Typography.Title
              level={2}
              style={{ fontWeight: "lighter", margin: 0, padding: 0 }}
            >
              Welcome to LiLia Sekai
            </Typography.Title>{" "}
            <Typography.Title
              style={{ fontWeight: "lighter", margin: 0, padding: 0 }}
              level={5}
            >
              Sebuah seni akan mewarnai hidupmu!
            </Typography.Title>
            <Input
              style={{
                marginTop: "20px",
                borderRadius: "12px",
                width: "90%",
              }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onPressEnter={() =>
                window.location.assign("/search?key=" + searchText)
              }
              size="large"
              prefix={<SearchOutlined style={{ fontSize: "16px" }} />}
              suffix={
                <Dropdown
                  trigger={["click"]}
                  overlay={
                    <Menu>
                      <Menu.Item>
                        <a rel="noopener noreferrer" href="/">
                          Pent Tablet Huion
                        </a>
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Item>
                        <a rel="noopener noreferrer" href="/">
                          VGA Nvidia RTX 2060
                        </a>
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Item>
                        <a rel="noopener noreferrer" href="/">
                          Product C
                        </a>
                      </Menu.Item>
                    </Menu>
                  }
                  placement="bottomRight"
                >
                  <Tooltip title="Recommendation Search / Hint">
                    <a>
                      <IconFont
                        type="icon-list"
                        style={{ fontSize: "18px", color: "#000" }}
                      />
                    </a>
                  </Tooltip>
                </Dropdown>
              }
              placeholder="Temukan apa yang kamu cari!"
            />
          </div>
        </Col>
        <Col
          xl={{
            span: 8,
            offset: 0,
          }}
          md={{
            span: 0,
            offset: 0,
          }}
          sm={{
            span: 0,
            offset: 0,
          }}
          xs={{
            span: 0,
            offset: 0,
          }}
          style={{ textAlign: "center" }}
        >
          <img alt="lia-logo" src="/lialogo.png" className="lia-logo-ini" />
        </Col>
        <Col
          xl={{
            span: 8,
            offset: 0,
          }}
          md={{
            span: 0,
            offset: 0,
          }}
          sm={{
            span: 0,
            offset: 0,
          }}
          xs={{
            span: 0,
            offset: 0,
          }}
        >
          <div style={{ width: "65%", marginTop: "24px" }}>
            <Typography.Title
              level={3}
              style={{ fontWeight: "lighter", margin: 0, padding: 0 }}
            >
              Cepat traktir aku wortel, dengan belanja di sini!
            </Typography.Title>
          </div>
          <div style={{ width: "65%", marginTop: "24px" }}>
            <Typography.Title
              level={4}
              style={{ fontWeight: "lighter", margin: 0, padding: 0 }}
            >
              Banyak hal yang belum kau temui disini, beberapa barang diskon dan
              murah bisa menjadi milikmu!
            </Typography.Title>
          </div>
        </Col>

        <Col
          xl={{
            span: 0,
            offset: 0,
          }}
          md={{
            span: 23,
            offset: 1,
          }}
          sm={{
            span: 23,
            offset: 1,
          }}
          xs={{
            span: 23,
            offset: 1,
          }}
        >
          <div style={{ width: "65%", marginTop: "24px" }}>
            <Typography.Title
              level={5}
              style={{ fontWeight: "lighter", margin: 0, padding: 0 }}
            >
              Cepat traktir aku wortel, dengan belanja di sini!
            </Typography.Title>
          </div>
          <div style={{ width: "75%", marginTop: "16px" }}>
            <Typography.Title
              level={5}
              style={{ fontWeight: "lighter", margin: 0, padding: 0 }}
            >
              Banyak hal yang belum kau temui disini, beberapa barang diskon dan
              murah bisa menjadi milikmu!
            </Typography.Title>
          </div>
        </Col>
        <Col span={24} style={{ textAlign: "right" }}>
          <Space>
            <Tooltip title="Whatsapp LiLia">
              <a href="https://whatsapp.com">
                <img
                  style={{ position: "relative", width: "36px" }}
                  alt="WA"
                  src="/whatsapp--v1.png"
                />
              </a>
            </Tooltip>
            <Tooltip title="Instagram LiLia">
              <a href="https://instagram">
                <img
                  style={{ position: "relative", width: "28px" }}
                  alt="IG"
                  src="/2048px-Instagram_icon.png"
                />
              </a>
            </Tooltip>
            <Tooltip title="Discord">
              <a href="https://discord.com">
                <img
                  style={{ position: "relative", width: "28px" }}
                  alt="DC"
                  src="/discord-mascot.png"
                />
              </a>
            </Tooltip>
            <Tooltip title="Twitter">
              <a href="https://twitter.com">
                <img
                  style={{ position: "relative", width: "28px" }}
                  alt="Twitter"
                  src="/twitter-logo-3.png"
                />
              </a>
            </Tooltip>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
