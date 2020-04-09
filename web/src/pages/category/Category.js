import React, { useState, useEffect } from "react";
import { Row, Col, Tag, Card } from "antd";
import { getCate } from "../../api/category";
import HomeRight from "../../component/home/HomeRight";
import "./index.scss";

function Category(props) {
  const [cateList, setCateList] = useState([]);
  useEffect(() => {
    getCate().then(res => {
      setCateList(res.data);
    });
  }, []);
  return (
    <div>
      <Row>
        <Col xs={24} sm={{ span: 14, offset: 4 }}>
          <Card
            title="博客分类"
            xs={{ marginTop: 0 }}
            style={{ width: "100%", marginTop: 16 }}
          >
            <Row>
              {cateList.map(cate => {
                return (
                  <Col
                    key={cate._id}
                    sm={6}
                    xs={12}
                    style={{ margin: "10px 0" }}
                  >
                    <Tag color={cate.color} className="cate" onClick={()=>props.history.push(`/category/${cate._id}`)}>
                      {cate.name}
                    </Tag>
                  </Col>
                );
              })}
            </Row>
          </Card>
        </Col>
        <Col xs={0} sm={{ span: 4, offset: 1 }}>
          <HomeRight />
        </Col>
      </Row>
    </div>
  );
}

export default Category;
