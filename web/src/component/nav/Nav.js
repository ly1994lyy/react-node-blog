import React, { useState } from "react";
import { Row, Col, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./index.scss";

function Nav(props) {
  const [visible, setVisible] = useState(false);
  const handleClick = e => {
    console.log("click ", e);
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <Row className="navBar">
        <Col xs={20} sm={{ span: 5, offset: 1 }}>
          <h1>Code Life</h1>
        </Col>
        <Col xs={0} sm={{ span: 10 }}>
          <Menu theme="dark" onClick={handleClick} mode="horizontal">
            <Menu.Item key="mail">首页</Menu.Item>
            <Menu.Item key="app">博客列表</Menu.Item>
            <Menu.Item key="alipay">博客分类</Menu.Item>
            <Menu.Item key="project">其他作品</Menu.Item>
            <Menu.Item key="about">关于作者</Menu.Item>
          </Menu>
        </Col>
        <Col xs={{span:2,offset:2}} sm={0}>
          <MenuOutlined className="meauBtn" onClick={showDrawer}  />
         
          <Drawer
            title="Code Life"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Menu theme="light" onClick={handleClick} mode="vertical">
            <Menu.Item key="mail">首页</Menu.Item>
            <Menu.Item key="app">博客列表</Menu.Item>
            <Menu.Item key="alipay">博客分类</Menu.Item>
            <Menu.Item key="project">其他作品</Menu.Item>
            <Menu.Item key="about">关于作者</Menu.Item>
          </Menu>
          </Drawer>
        </Col>
      </Row>
      {props.children}
    </div>
  );
}

export default Nav;
