import React from "react";
import HomeRight from "./HomeRight";
import { Row, Col } from "antd";

function HomeBody(props) {
  return (
    <div className="homeBody">
      <Row>
        <Col
          xs={24}
          sm={{ span: 14, offset: 4 }}
          style={{ marginBottom: "16px", marginTop: "16px" }}
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
