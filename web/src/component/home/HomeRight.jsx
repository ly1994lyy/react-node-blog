import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import "./index.scss";
import {
  GithubFilled,
  QqCircleFilled,
  WechatFilled,
  createFromIconfontCN
} from "@ant-design/icons";
import { getCate } from "../../api/category";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1727658_7hnltexi0hn.js"
});

function HomeRight() {
  const [cateList, setCateList] = useState([]);
  useEffect(() => {
    getCate().then(res => {
      const list = res.data.filter(item=>{
        return item.isHot===true
      })
      setCateList(list)
    });
  }, []);
  return (
    <div>
      <Card title="相关链接" style={{ width: "100%", marginTop: 16 }}>
        <Button
          href="https://github.com/ly1994lyy"
          icon={<GithubFilled />}
        ></Button>
        <Button icon={<QqCircleFilled />}></Button>
        <Button icon={<WechatFilled />}></Button>
        <IconFont type="icon-bilibili-fill"></IconFont>
      </Card>
      <Card title="友情链接" style={{ width: "100%", marginTop: 16 }}>
        <p>暂无链接，欢迎加入</p>
      </Card>
      <Card title="热门分类" style={{ width: "100%", marginTop: 16 }}>
        {
          cateList.map(item=>{
          return <p key={item._id}>{item.name}</p>
          })
        }
      </Card>
    </div>
  );
}

export default HomeRight;
