import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { getAbout } from "../../api/auth";
import "../other/index.scss";
import Nav from "../../component/nav/Nav";
import HomeBody from "../../component/home/HomeBody";
import Foot from "../../component/foot/Foot";

function About(props) {
  const [artList, setArtList] = useState([]);
  useEffect(() => {
    getAbout().then((res) => {
      setArtList(res.data);
    });
  }, []);
  return (
    <div>
      <Nav path={props.location.pathname} />
      <HomeBody>
        <Card title="关于作者">
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

export default About;
