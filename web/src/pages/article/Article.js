import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Tag,
  Card,
  Comment,
  Avatar,
  Form,
  Button,
  List,
  Input
} from "antd";
import { LikeFilled } from "@ant-design/icons";
import { getArtById } from "../../api/article";
import { comment } from "../../api/auth";
import { dayGet, dayGetDetail } from "../../utils/day";
import HomeRight from "../../component/home/HomeRight";
import { connect } from "react-redux";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        提交评论
      </Button>
    </Form.Item>
  </div>
);

function Article(props) {
  const [art, setArt] = useState({
    categories: []
  });
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    getArtById(props.match.params.id).then(res => {
      const  userComments = res.data.comments;
      const a= []
      userComments.map(item=>{
        a.push({
          author: item.commenter,
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: <p>{item.body}</p>,
          datetime: dayGetDetail(item.created)
        })
      })
      setArt(res.data);
      setComments(a);
    });
  }, []);

  const handleSubmit = async () => {
    if (!value) {
      return;
    }
    setSubmitting(true);
    const values = {};
    values.commenter = props.user.id;
    values.article = props.match.params.id;
    values.body = value;
    await comment({ ...values });
    setSubmitting(false);
    setValue("");
    getArtById(props.match.params.id).then(res => {
      const  userComments = res.data.comments;
      const a= []
      userComments.map(item=>{
        a.push({
          author: item.commenter,
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: <p>{item.body}</p>,
          datetime: dayGetDetail(item.created)
        })
      })
      setArt(res.data);
      setComments(a);
    });
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Row>
        <Col xs={24} sm={{ span: 14, offset: 4 }}>
          <Card xs={{ marginTop: 0 }} style={{ width: "100%", marginTop: 16 }}>
            <Card bordered={false}>
              <h2 className="tx-c">{art.title}</h2>
              <p className="tx-c fz-6">
                <Tag color="#108ee9">创建:{dayGet(art.createdAt)}</Tag>
                &nbsp;
                <Tag color="#87d068">更新:{dayGet(art.updatedAt)}</Tag>
                &nbsp;
                {art.categories.map(cate => {
                  return (
                    <Tag
                      key={cate._id}
                      style={{ marginRight: 5 }}
                      color={cate.color}
                    >
                      分类:{cate.name}
                    </Tag>
                  );
                })}
                &nbsp;
                <Tag color="#f50" icon={<LikeFilled />}>
                  {art.liked}
                </Tag>
              </p>
              <p dangerouslySetInnerHTML={{ __html: art.body }}></p>
              <div className="tx-c"></div>
              {comments.length > 0 && <CommentList comments={comments} />}
              <Comment
                avatar={
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                }
                content={
                  <Editor
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    submitting={submitting}
                    value={value}
                  />
                }
              />
            </Card>
          </Card>
        </Col>
        <Col xs={0} sm={{ span: 4, offset: 1 }}>
          <HomeRight />
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Article);
