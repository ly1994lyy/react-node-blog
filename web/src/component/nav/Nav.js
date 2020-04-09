import React, { useState, Fragment } from "react";
import { Row, Col, Menu, Drawer, Button, Modal, Form, Input } from "antd";
import { withRouter } from "react-router-dom";
import { MenuOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { userLogin, userRegister } from "../../store/actions/authActions";
import "./index.scss";

function Nav(props) {
  const [visible, setVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onRegisterFinish = async values => {
    props.dispatch(userRegister({ ...values }));
  };

  const onFinish = values => {
    props.dispatch(userLogin({ ...values }));
  };
  const isLogin = props.user;

  return (
    <div>
      <Row className="navBar">
        <Col xs={20} sm={{ span: 5, offset: 1 }}>
          <h1>Code Life</h1>
        </Col>
        <Col xs={0} sm={{ span: 10 }}>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="/" onClick={() => props.history.push("/")}>
              首页
            </Menu.Item>
            <Menu.Item
              key="/article"
              onClick={() => props.history.push("/article")}
            >
              博客列表
            </Menu.Item>
            <Menu.Item
              key="/category"
              onClick={() => props.history.push("/category")}
            >
              博客分类
            </Menu.Item>
            <Menu.Item key="project" onClick={() => props.history.push("")}>
              其他作品
            </Menu.Item>
            <Menu.Item
              key="/about"
              onClick={() => props.history.push("/about")}
            >
              关于作者
            </Menu.Item>
          </Menu>
          
        </Col>
        <Col xs={0} sm={{ span: 4, offset: 3 }} style={{ lineHeight: "60px" }}>
          {isLogin.isAuthenticated ? (
            <div>{isLogin.user.username}</div>
          ) : (
            <Fragment>
              <Button
                type="link"
                style={{ margin: "0 10px" }}
                onClick={() => setLoginVisible(true)}
              >
                登录
              </Button>
              <Button type="link" onClick={() => setRegisterVisible(true)}>
                注册
              </Button>
            </Fragment>
          )}
        </Col>
        <Col xs={{ span: 2, offset: 2 }} sm={0}>
          <MenuOutlined className="meauBtn" onClick={showDrawer} />

          <Drawer
            title="Code Life"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Menu theme="light" mode="vertical">
              <Menu.Item key="mail">首页</Menu.Item>
              <Menu.Item key="app">博客列表</Menu.Item>
              <Menu.Item key="alipay">博客分类</Menu.Item>
              <Menu.Item key="project">其他作品</Menu.Item>
              <Menu.Item key="about">关于作者</Menu.Item>
            </Menu>
          </Drawer>
        </Col>

        {/* 登录框 */}
        <Modal
          title="登录"
          visible={loginVisible}
          onOk={e => setLoginVisible(false)}
          onCancel={e => setLoginVisible(false)}
        >
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        {/* 注册框 */}
        <Modal
          title="注册"
          visible={registerVisible}
          onOk={e => setRegisterVisible(false)}
          onCancel={e => setRegisterVisible(false)}
        >
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onRegisterFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="passwordConfirm"
              rules={[
                { required: true, message: "Please input your Password!" }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                注册
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Row>
      {props.children}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth
  };
};

export default withRouter(connect(mapStateToProps)(Nav));
