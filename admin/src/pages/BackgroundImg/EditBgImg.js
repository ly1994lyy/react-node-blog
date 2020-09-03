import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Upload } from "antd";
import { getBgImgById, putBgImg, createBgImg } from "../../api/bgimg";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function EditBgImg(props) {
  const [form] = Form.useForm();
  const [dataCurrent] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (props.match.params.id) {
      getBgImgById(props.match.params.id).then((res) => {
        form.setFieldsValue({ ...res.data });
        setImageUrl(res.data.img);
      });
    }
  }, []);
  const onFinish = async (values) => {
    if (props.match.params.id) {
      await putBgImg(props.match.params.id, { ...values,img:imageUrl });
      message.success("修改分类成功！");
    } else {
      await createBgImg({ ...values,img:imageUrl });
      message.success("添加分类成功！");
    }
    props.history.push("/admin/bgimg");
  };

  const onFinishFailed = (errorInfo) => {
    message.error("请检查填写项");
    console.log("Failed:", errorInfo);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const handleChange = info => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      setLoading(false);
      setImageUrl(info.file.response.url);
    }
  };


  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={dataCurrent}
      form={form}
    >
      <Form.Item
        label="背景图名称"
        name="name"
        rules={[{ required: true, message: "请填写名称" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="背景图">
      <Upload
        name="file"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="http://localhost:3008/upload"
        onChange={handleChange}
        >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EditBgImg;
