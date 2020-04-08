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
  Input,
  message,
} from "antd";
import { LikeFilled, LikeOutlined } from "@ant-design/icons";
import { getArtById } from "../../api/article";
import { comment, like } from "../../api/auth";
import { dayGet, dayGetDetail } from "../../utils/day";
import HomeRight from "../../component/home/HomeRight";
import { connect } from "react-redux";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
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
    categories: [],
    likes: [],
  });
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const [isLike, setLike] = useState(false);
  useEffect(() => {
    getArtById(props.match.params.id).then((res) => {
      if (props.user) {
        const isValid = res.data.likes.find((item) => {
          return item.user === props.user.id;
        });
        if (isValid) setLike(true);
      }

      const userComments = res.data.comments;
      const a = [];
      userComments.map((item) => {
        a.push({
          author: item.commenter.username,
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: <p>{item.body}</p>,
          datetime: dayGetDetail(item.created),
        });
      });
      setArt(res.data);
      setComments(a);
    });
  }, []);

  const liked = async () => {
    const values = {};
    values.user = props.user.id;
    values.article = props.match.params.id;
    await like({ ...values });
    message.success("感谢点赞~");
  };

  const cancleLiked = () => {
    console.log("cancle");
  };

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
    getArtById(props.match.params.id).then((res) => {
      const userComments = res.data.comments;
      const a = [];
      userComments.map((item) => {
        a.push({
          author: item.commenter.username,
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: <p>{item.body}</p>,
          datetime: dayGetDetail(item.created),
        });
      });
      setArt(res.data);
      setComments(a);
    });
  };

  const handleChange = (e) => {
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
                {art.categories.map((cate) => {
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
                  {art.likes.length}
                </Tag>
              </p>
              <p dangerouslySetInnerHTML={{ __html: art.body }}></p>
              <div className="tx-c"></div>
              {isLike ? (
                <LikeFilled onClick={cancleLiked} />
              ) : (
                <LikeOutlined onClick={liked} />
              )}

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

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Article);
