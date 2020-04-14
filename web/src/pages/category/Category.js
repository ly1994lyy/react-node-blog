import React, { useState, useEffect } from "react";
import { Row, Col, Tag, Card } from "antd";
import { getCate } from "../../api/category";
import "./index.scss";
import Nav from "../../component/nav/Nav"
import HomeBody from "../../component/home/HomeBody"
import Foot from "../../component/foot/Foot"

function Category(props) {
  const [cateList, setCateList] = useState([]);
  useEffect(() => {
    getCate().then((res) => {
      setCateList(res.data);
    });
  }, []);
  return (
    <div>
      <Nav path={props.location.pathname} />
      <HomeBody>
      <Card
        title="博客分类"
        xs={{ marginTop: 0 }}
        style={{ width: "100%", marginTop: 16 }}
      >
        <Row>
          {cateList.map((cate) => {
            return (
              <Col key={cate._id} sm={6} xs={12} style={{ margin: "10px 0" }}>
                <Tag
                  color={cate.color}
                  className="cate"
                  onClick={() => props.history.push(`/category/${cate._id}`)}
                >
                  {cate.name}
                </Tag>
              </Col>
            );
          })}
        </Row>
      </Card>
      </HomeBody>
      <Foot />
    </div>
  );
}

export default Category;
