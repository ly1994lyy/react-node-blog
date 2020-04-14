import React, { useState, useEffect } from "react";
import { Card, Button, Tag, Modal } from "antd";
import "./index.scss";
import { createFromIconfontCN } from "@ant-design/icons";
import { getCate } from "../../api/category";
import { getFriendLink } from "../../api/auth";
import qqUrl from "../../images/qq.png"
import wechatUrl from "../../images/wechat.jpeg"

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1727658_bmph9iu4g4b.js",
});

function HomeRight() {
  const [cateList, setCateList] = useState([]);
  const [linkList, setLinkList] = useState([]);
  const [visible, setVisible] = useState(false)
  const [choose, setChoose] = useState('')
  useEffect(() => {
    getCate().then((res) => {
      const list = res.data.filter((item) => {
        return item.isHot === true;
      });
      setCateList(list);
    });
    getFriendLink().then((res) => {
      setLinkList(res.data);
    });
  }, []);

  const handleOk = e => {
   setVisible(false)
   setChoose("")
  };

  const handleCancel = e => {
    setVisible(false)
    setChoose("")
  };
  return (
    <div>
      <Card
        title="相关链接"
        className="iconBody"
        style={{ width: "100%", marginTop: 16 }}
      >
        <IconFont type="icon-github" onClick={()=>{
          window.location.href="https://github.com/ly1994lyy"
        }}></IconFont>
        <IconFont type="icon-qq" onClick={()=>{
          setVisible(true)
          setChoose("qq")
        }}></IconFont>
        <IconFont type="icon-we-chat" onClick={()=>{
          setVisible(true)
          setChoose("wechat")
        }}></IconFont>
        <IconFont type="icon-Bilibili" onClick={()=>{
          window.location.href="https://space.bilibili.com/99710594"
        }}></IconFont>
      </Card>
      <Card title="友情链接" style={{ width: "100%", marginTop: 16 }}>
        {linkList.map((link) => {
          return (
            <Button key={link._id} type="link" href={link.ref}>
              {link.title}
            </Button>
          );
        })}
      </Card>
      <Card title="热门分类" style={{ width: "100%", marginTop: 16 }}>
        {cateList.map((item) => {
          return (
            <Tag
              key={item._id}
              color={item.color}
              style={{ margin: "4px 10px" }}
            >
              {item.name}
            </Tag>
          );
        })}
      </Card>
      <Modal
          title={choose}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          className="linkImag"
        >
          {choose==="qq"?<img src={qqUrl} alt=""/>:<img src={wechatUrl} alt={choose} />}
          
        </Modal>

    </div>
  );
}

export default HomeRight;
