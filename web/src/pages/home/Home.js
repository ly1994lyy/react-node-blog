import React, { useState, useEffect } from "react";
import { Tag, Card } from "antd";
import { LikeFilled } from "@ant-design/icons";
import { getArt } from "../../api/article";
import { dayGet } from "../../utils/day";

function Home(props) {
  const [artList, setArtList] = useState([]);
  useEffect(() => {
    getArt().then((res) => {
      const list = res.data.filter((item) => {
        return item.isHot === true;
      });
      setArtList(list);
    });
  }, []);
  return (
    <div>
      <Card
        title="精选博客"
        xs={{ marginTop: 0 }}
        style={{ width: "100%", marginTop: 16 }}
      >
        {artList.map((item) => {
          return (
            <Card key={item._id} bordered={false}>
              <h2 className="tx-c">{item.title}</h2>
              <p className="tx-c fz-6">
                <Tag color="#108ee9">创建:{dayGet(item.createdAt)}</Tag>&nbsp;
                <Tag color="#87d068">更新:{dayGet(item.updatedAt)}</Tag>&nbsp;
                {item.categories.map((cate) => {
                  return (
                    <Tag
                      key={cate._id}
                      style={{ marginRight: 5 }}
                      color="#2db7f5"
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
    </div>
  );
}

export default Home;
