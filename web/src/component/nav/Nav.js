import React, { useState, Fragment } from "react";
import {
  Row,
  Col,
  Menu,
  Drawer,
  Button,
  Modal,
  Form,
  Input,
  Dropdown,
} from "antd";
import { withRouter } from "react-router-dom";
import {
  MenuOutlined,
  UserOutlined,
  LockOutlined,
  DownOutlined,
  PoweroffOutlined
} from "@ant-design/icons";
import { connect } from "react-redux";
import { userLogin, userRegister } from "../../store/actions/authActions";
import "./index.scss";

function Nav(props) {
  const [visible, setVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [choose, setChoose] = useState("");

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <p
          onClick={() => {
            localStorage.removeItem("usertoken");
          }}
        >
          登出
        </p>
      </Menu.Item>
    </Menu>
  );

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    if (choose === "登录") {
      props.dispatch(userLogin({ ...values }));
      setLoginVisible(false);
    } else {
      props.dispatch(userRegister({ ...values }));
      setLoginVisible(false);
    }
  };
  const isLogin = props.user;

  return (
    <div>
      <Row className="navBar">
        <Col xs={20} sm={{ span: 5, offset: 1 }}>
          <h1 onClick={()=>props.history.push('/')}>Code Life</h1>
        </Col>
        <Col xs={0} sm={{ span: 10 }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[props.path]}
          >
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
            <Menu.Item
              key="/other"
              onClick={() => props.history.push("/other")}
            >
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
            <Dropdown overlay={menu} trigger={["click"]}>
              <a className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                style={{ color: "#eee" }}
              >
                {isLogin.user.username} <DownOutlined />
              </a>
            </Dropdown>
          ) : (
            <Fragment>
              <Button
                type="link"
                style={{ margin: "0 10px" }}
                onClick={() => {
                  setLoginVisible(true);
                  setChoose("登录");
                }}
              >
                登录
              </Button>
              <Button
                type="link"
                onClick={() => {
                  setLoginVisible(true);
                  setChoose("注册");
                }}
              >
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
            <Menu
              theme="light"
              mode="vertical"
              defaultSelectedKeys={[props.path]}
            >
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
              <Menu.Item
                key="/other"
                onClick={() => props.history.push("/other")}
              >
                其他作品
              </Menu.Item>
              <Menu.Item
                key="/about"
                onClick={() => props.history.push("/about")}
              >
                关于作者
              </Menu.Item>
            </Menu>
            {isLogin.isAuthenticated ? (
              <div className="drawerFoot">
                <span className="loginUser">{isLogin.user.username}</span>
                <Button
                  type="primary"
                  danger
                  icon={<PoweroffOutlined />}
                  onClick={() => {
                    localStorage.removeItem("usertoken");
                  }}
                >
                  注销
                </Button>
              </div>
            ) : (
              <div className="drawerFoot">
                <Button
                  type="link"
                  style={{ margin: "0 10px" }}
                  onClick={() => {
                    setLoginVisible(true);
                    setChoose("登录");
                  }}
                >
                  登录
                </Button>
                <Button
                  type="link"
                  onClick={() => {
                    setLoginVisible(true);
                    setChoose("注册");
                  }}
                >
                  注册
                </Button>
              </div>
            )}
          </Drawer>
        </Col>

        {/* 登录框和注册框 */}
        <Modal
          title={choose}
          visible={loginVisible}
          onOk={(e) => setLoginVisible(false)}
          onCancel={(e) => setLoginVisible(false)}
        >
          {choose === "登录" ? (
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
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
                  { required: true, message: "Please input your Password!" },
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
          ) : (
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
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
                  { required: true, message: "Please input your Password!" },
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
                  { required: true, message: "Please input your Password!" },
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
          )}
        </Modal>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};

export default withRouter(connect(mapStateToProps)(Nav));
