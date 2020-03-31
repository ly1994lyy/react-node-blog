import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Select } from "antd";
import { createArticle, getArticleById, putArticle } from "../../api/article";
import { getCategory } from "../../api/category";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";

const { Option } = Select;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

function EditArticle(props) {
  const [form] = Form.useForm();
  const [cateList, setCateList] = useState([]);
  const [editorState, setEditorState] = useState(null);
  useEffect(() => {
    if (props.match.params.id) {
      getArticleById(props.match.params.id).then(res => {
        form.setFieldsValue({ ...res.data });
        setEditorState(BraftEditor.createEditorState(res.data.body));
      });
    }
    getCategory().then(res => {
      setCateList(res.data);
    });
  }, []);
  const onFinish = async values => {
    values.body = editorState.toHTML();
    if (props.match.params.id) {
      await putArticle(props.match.params.id, { ...values });
      message.success("修改文章成功！");
    } else {
      await createArticle({ ...values });
      message.success("添加文章成功！");
    }
    props.history.push("/admin/article");
  };

  const onFinishFailed = errorInfo => {
    message.error("请检查填写项");
    console.log("Failed:", errorInfo);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const handleEditorChange = e => {
    setEditorState(e);
  };
  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item
        label="文章标题"
        name="title"
        rules={[{ required: true, message: "请填写标题" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="分类"
        name="categories"
        rules={[{ required: true, message: "请填写分类" }]}
      >
        <Select onChange={handleChange} mode="multiple" placeholder="请选择分类" allowClear>
          {cateList.map(cate => {
            return (
              <Option key={cate._id} value={cate._id}>
                {cate.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        label="文章内容"
        rules={[{ required: true, message: "请填写内容" }]}
      >
        <BraftEditor value={editorState} onChange={handleEditorChange} style={{border:"1px solid #e5c6c6"}} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EditArticle;
