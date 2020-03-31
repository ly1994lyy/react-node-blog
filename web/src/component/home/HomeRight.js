import React from "react";
import { Card,Button } from "antd";
import {GithubFilled} from "@ant-design/icons"

function HomeRight() {
  return (
    <div>
      <Card
        title="友情链接"
        style={{width: "100%", marginTop: 16 }}
      >
          <Button href="https://github.com/ly1994lyy" icon={<GithubFilled />}></Button>
          
      </Card>
    </div>
  );
}

export default HomeRight;
