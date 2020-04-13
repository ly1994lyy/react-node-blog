import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { getAbout } from "../../api/auth";
import "../other/index.scss";

function About() {
  const [artList, setArtList] = useState([]);
  useEffect(() => {
    getAbout().then((res) => {
      setArtList(res.data);
    });
  }, []);
  return (
    <div>
      <Card
        title="关于作者"
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
    </div>
  );
}

export default About;
