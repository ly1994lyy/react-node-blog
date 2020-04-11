import React, { useState, useEffect } from "react";
import { Row, Col,Card } from "antd";
import { getOther } from "../../api/auth";
import HomeRight from "../../component/home/HomeRight";
import './index.scss'

function Other() {
  const [artList, setArtList] = useState([]);
  useEffect(() => {
    getOther().then((res) => {
      setArtList(res.data);
    });
  }, []);
  return (
    <div>
      <Row>
        <Col xs={24} sm={{ span: 14, offset: 4 }}>
          <Card
            title="其他作品"
            xs={{ marginTop: 0 }}
            style={{ width: "100%", marginTop: 16 }}
          >
            {artList.map((item) => {
              return (
                <Card key={item._id} bordered={false}>
                  <p
                    className="otherBody"
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  ></p>
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

export default Other;
