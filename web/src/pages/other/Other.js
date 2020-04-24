import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { getOther } from "../../api/auth";
import "./index.scss";
import Nav from "../../component/nav/Nav";
import HomeBody from "../../component/home/HomeBody";
import Foot from "../../component/foot/Foot";

function Other(props) {
  const [artList, setArtList] = useState([]);
  useEffect(() => {
    getOther().then((res) => {
      setArtList(res.data);
    });
  }, []);
  return (
    <div>
      <Nav path={props.location.pathname} />
      <HomeBody>
        <Card title="其他作品">
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
      </HomeBody>
      <Foot />
    </div>
  );
}

export default Other;
