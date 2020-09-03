import React, { useState, useEffect } from "react";
import {
  Card,
  Popconfirm,
  message,
  Button,
  Table,
  Tag,
  Input,
  Row,
  Col
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { delBgImg, getBgImg } from "../../api/bgimg"

const { Search } = Input;

function BgImgList(props) {
  const columns = [
    {
      title: "序号",
      dataIndex: "_id",
      align: "center",
      render: (text, record, index) => index + 1
    },
    {
      title: "图片名称",
      align: "center",
      dataIndex: "name"
    },
    {
        title: "背景图",
        align: "center",
        dataIndex: "img",
        render:(text,record,index)=>{
            return <img src={record.img} alt="" style={{width:'60px'}} />
        }
      },
    {
      title: "操作",
      align: "center",
      render: (text, record, index) => {
        return (
          <div>
            <Popconfirm
              title="确定删除此项吗?"
              okText="是"
              cancelText="否"
              onCancel={() => message.error("取消删除")}
              onConfirm={async () => {
                const { data } = await delBgImg(record._id);
                message.success(data.message);
                const res = await getBgImg();
                setDataList(res.data);
              }}
            >
              <Tag color="#f50">删除</Tag>
            </Popconfirm>
            <Tag
              color="#108ee9"
              onClick={() =>
                props.history.push(`/admin/bgimg/edit/${record._id}`)
              }
            >
              编辑
            </Tag>
          </div>
        );
      }
    }
  ];
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    getBgImg().then(res => {
      setDataList(res.data.data);
    });
  }, []);

  const searchCate = async values => {
    const res = await getBgImg({ searchWord: values });
    setDataList(res.data.data);
  };

  return (
    <Card title="背景图管理">
      <Row justify="space-between" style={{ marginBottom: "15px" }}>
        <Col span={4}>
          <Search
            placeholder="搜索分类"
            allowClear
            onSearch={searchCate}
            style={{ width: 200 }}
          />
        </Col>
        <Col span={1.5}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => props.history.push("/admin/bgimg/create")}
          >
            添加分类
          </Button>
        </Col>
      </Row>

      <Table
        rowKey="_id"
        columns={columns}
        dataSource={dataList}
        bordered
        pagination={{ pageSize: 5, showQuickJumper: true }}
      />
    </Card>
  );
}

export default BgImgList
