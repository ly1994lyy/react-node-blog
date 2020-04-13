import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { getOther } from "../../api/auth";
import "./index.scss";

function Other() {
  const [artList, setArtList] = useState([]);
  useEffect(() => {
    getOther().then((res) => {
      setArtList(res.data);
    });
  }, []);
  return (
    <div>
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
    </div>
  );
}

export default Other;
