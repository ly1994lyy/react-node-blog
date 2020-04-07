import React, { useState, useEffect } from "react";
import { Row, Col, Tag } from "antd";
import { Card } from "antd";
import { LikeFilled } from "@ant-design/icons";
import { getArt } from "../../api/article";
import { dayGet } from "../../utils/day";
import HomeRight from "../../component/home/HomeRight";

function ArticleList(props) {
  const [artList, setArtList] = useState([]);
  useEffect(() => {
    getArt().then(res => {
      setArtList(res.data);
    });
  }, []);
  return (
    <div>
      <Row>
        <Col xs={24} sm={{ span: 14, offset: 4 }}>
          <Card
            title="博客列表"
            xs={{ marginTop: 0 }}
            style={{ width: "100%", marginTop: 16 }}
          >
            {artList.map(item => {
              return (
                <Card key={item._id} bordered={false}>
                  <h2 className="tx-c">{item.title}</h2>
                  <p className="tx-c fz-6">
                    <Tag color="#108ee9">创建:{dayGet(item.createdAt)}</Tag>
                    &nbsp;
                    <Tag color="#87d068">更新:{dayGet(item.updatedAt)}</Tag>
                    &nbsp;
                    {item.categories.map(cate => {
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
                      {item.liked}
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
        </Col>
        <Col xs={0} sm={{ span: 4, offset: 1 }}>
          <HomeRight />
        </Col>
      </Row>
    </div>
  );
}

export default ArticleList;
