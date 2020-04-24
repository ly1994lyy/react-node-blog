import React, { useState, useEffect } from "react";
import { Tag, Card } from "antd";
import { LikeFilled } from "@ant-design/icons";
import { getArt } from "../../api/article";
import { dayGet } from "../../utils/day";
import Nav from "../../component/nav/Nav";
import HomeBody from "../../component/home/HomeBody";
import Foot from "../../component/foot/Foot";

function Home(props) {
  const [artList, setArtList] = useState([]);
  useEffect(() => {
    getArt().then((res) => {
      const list = res.data.model.filter((item) => {
        return item.isHot === true;
      });
      setArtList(list);
    });
  }, []);
  return (
    <div>
      <Nav path={props.location.pathname} />
      <HomeBody>
        <Card title="精选博客">
          {artList.map((item) => {
            return (
              <Card key={item._id} bordered={false}>
                <h2 className="tx-c">{item.title}</h2>
                <p className="tx-c fz-6">
                  <Tag color="#108ee9">创建:{dayGet(item.created)}</Tag>&nbsp;
                  <Tag color="#87d068">更新:{dayGet(item.updated)}</Tag>&nbsp;
                  {item.categories.map((cate) => {
                    return (
                      <Tag
                        key={cate._id}
                        style={{ marginRight: 5 }}
                        color={cate.color}
                      >
                        分类:{cate.name}
                      </Tag>
                    );
                  })}
                  &nbsp;
                  <Tag color="#f50" icon={<LikeFilled />}>
                    {item.likes.length}
                  </Tag>
                </p>
                <p
                  className="blogBody"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                ></p>
                <div className="tx-c">
                  <button
                    className="txBtn"
                    onClick={() => props.history.push(`/article/${item._id}`)}
                  >
                    阅读全文
                  </button>
                </div>
              </Card>
            );
          })}
        </Card>
      </HomeBody>
      <Foot />
    </div>
  );
}

export default Home;
