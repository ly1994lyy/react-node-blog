import React from "react";
import HomeRight from "./HomeRight";
import { Row, Col } from "antd";

function HomeBody(props) {
  return (
    <div className="homeBody">
      <Row>
        <Col
          xs={{ span: 24, marginTop: 0, marginBottom: 0 }}
          sm={{ span: 14, offset: 4, marginTop: 16, marginBottom: 16 }}
        >
          {props.children}
        </Col>
        <Col xs={0} sm={{ span: 4, offset: 1 }}>
          <HomeRight />
        </Col>
      </Row>
    </div>
  );
}

export default HomeBody;
