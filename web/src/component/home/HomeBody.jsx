import React, { useState, useEffect } from "react";
import HomeRight from "./HomeRight";
import { Row, Col, Tag,Card } from "antd";
import { LikeFilled } from "@ant-design/icons";
import { getArt } from "../../api/article";
import {dayGet} from "../../utils/day"

function HomeBody(props) {
  const [artList, setArtList] = useState([]);
  useEffect(() => {
    getArt().then(res => {
      const list = res.data.filter(item=>{
        return item.isHot === true
      })
      setArtList(list);
    });
  }, []);
  return (
    <div>
      <Row>
        <Col xs={24} sm={{ span: 14, offset: 4 }}>
          <Card
            title="精选博客"
            xs={{ marginTop: 0 }}
            style={{ width: "100%", marginTop: 16 }}
          >
            {artList.map(item => {
              return (
                <Card key={item._id} bordered={false}>
                  <h2 className="tx-c">{item.title}</h2>
                  <p className="tx-c fz-6">
                    <Tag color="#108ee9">创建:{dayGet(item.createdAt)}</Tag>&nbsp;
                    <Tag color="#87d068">更新:{dayGet(item.updatedAt)}</Tag>&nbsp;
                    {
                      item.categories.map(cate=>{
                        return <Tag key={cate._id} style={{marginRight:5}} color="#2db7f5">分类:{cate.name}</Tag>
                      })
                    }
                    &nbsp;
                    <Tag color="#f50" icon={<LikeFilled />}>
                      {item.liked}
                    </Tag>
                  </p>
                  <p className="blogBody" dangerouslySetInnerHTML={{__html: item.body}}>
                  </p>
                  <div className="tx-c">
                    <button className="txBtn" onClick={()=>props.history.push(`/article/${item._id}`)}>阅读全文</button>
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

export default HomeBody;
