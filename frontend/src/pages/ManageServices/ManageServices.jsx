import React, { useContext, useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext";
import newRequest from "../../utils/newRequest";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const ManageServices = () => {
  const { currentUser } = useContext(AuthContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [services, setServices] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await newRequest.get(`/gigs?userId=${currentUser._id}`);
        const fetchedServices = res.data.map((service, index) => ({
          key: service._id,
          index: index + 1,
          id: service._id,
          title: service.title,
          picture: service.serviceImages[0] || "https://via.placeholder.com/50",
          category: service.category,
          subcategory: service.subCategory,
          time: new Date(service.createdAt).toLocaleString(), // Format the time as needed
        }));
        setServices(fetchedServices);
        console.log(fetchedServices);
      } catch (err) {
        console.log(err.response.data.message);
      }
    };
    fetchServices();
  }, [currentUser._id]);

  const handleAddService = () => {
    setIsModalVisible(true);
    setIsEditing(false);
    setCurrentRecord(null);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (isEditing && currentRecord) {
        setServices(
          services.map((service) =>
            service.key === currentRecord.key
              ? { ...currentRecord, ...values }
              : service
          )
        );
      } else {
        setServices([
          ...services,
          { key: (services.length + 1).toString(), ...values },
        ]);
      }
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEdit = (record, event) => {
    event.stopPropagation();
    navigate(`/updateservice/${record.key}`);
  };

  const handleDelete = async (key, event) => {
    event.stopPropagation();
    try {
      await newRequest.delete(`/gigs/${key}`);
      setServices(services.filter((service) => service.key !== key));
      toast.success("Gig has been deleted!");
    } catch (err) {
      toast.error("Failed to delete the gig.");
    }
  };

  const handleSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const columns = [
    {
      title: "Index",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Picture",
      dataIndex: "picture",
      key: "picture",
      render: (picture) => (
        <img src={picture} alt="service" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Subcategory",
      dataIndex: "subcategory",
      key: "subcategory",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <span>
          <Button
            type="link"
            icon={<AiOutlineEdit />}
            onClick={(event) => handleEdit(record, event)}
            className="text-green-500 border border-green-500 mr-2 hover:!bg-green-500 hover:!text-white"
          />
          <Button
            type="link"
            icon={<AiOutlineDelete />}
            danger
            onClick={(event) => handleDelete(record.key, event)}
            className="text-red-500 border border-red-500 hover:!bg-red-500 hover:!text-white"
          />
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen !bg-[#F6F8FA] p-6">
      <div className="max-w-screen-2xl mx-auto rounded-lg px-6">
        <div className="flex justify-between items-center my-14 mb-14 xs-b:flex-nowrap flex-wrap">
          <h1 className="font-medium text-5xl text-center w-full mb-4 sm:mb-0 sm:text-left">
            Manage Services
          </h1>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            href="/createservice"
            className="!border-[#0E9F6E] px-5 py-5 flex justify-center items-center !bg-[#0E9F6E] text-white rounded-3xl hover:!bg-[#046c4e] font-[500] outline-none text-[16px]"
          >
            Create Service
          </Button>
        </div>
        <div className="table-responsive !mb-20">
          <Table
            columns={columns}
            dataSource={services}
            rowSelection={{
              type: "checkbox",
              selectedRowKeys,
              onChange: handleSelectChange,
            }}
            pagination={{ pageSize: 5 }}
            className="bg-white rounded-lg border border-gray-200 w-full"
            rowClassName={(record, index) =>
              index % 2 === 0 ? "table-row-light" : "table-row-dark"
            }
            onRow={(record) => ({
              onClick: () => navigate(`/service/${record.id}`),
            })}
          />
        </div>
        <Modal
          title={isEditing ? "Edit Service" : "Add Service"}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText={isEditing ? "Save" : "Add"}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              name="id"
              label="ID"
              rules={[{ required: true, message: "Please input the ID!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please input the title!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="picture"
              label="Picture URL"
              rules={[
                { required: true, message: "Please input the picture URL!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="category"
              label="Category"
              rules={[
                { required: true, message: "Please select the category!" },
              ]}
            >
              <Select>
                <Option value="Web & App Design">Web & App Design</Option>
                <Option value="Web Development">Web Development</Option>
                <Option value="Digital Marketing">Digital Marketing</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="subcategory"
              label="Subcategory"
              rules={[
                { required: true, message: "Please input the subcategory!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="time"
              label="Time"
              rules={[{ required: true, message: "Please input the time!" }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
        <style jsx>{`
          .ant-checkbox-checked .ant-checkbox-inner,
          .ant-checkbox-indeterminate .ant-checkbox-inner::after {
            background-color: #0e9f6e !important;
            border-color: #0e9f6e !important;
          }

          .ant-checkbox-inner {
            border-radius: 2px;
          }

          .ant-checkbox:hover .ant-checkbox-inner,
          .ant-checkbox-wrapper:hover .ant-checkbox-inner {
            border-color: #0e9f6e !important;
            background-color: #e6fff0 !important;
          }

          .ant-table-thead > tr > th {
            background-color: #f0fdf4;
            color: #0e9f6e;
          }

          .ant-table-tbody > tr > td {
            background-color: #ffffff;
          }

          .table-row-light {
            background-color: #f0fdf4;
          }

          .table-row-dark {
            background-color: #ffffff;
          }

          .hovered-row {
            background-color: #0e9f6e !important;
          }

          .ant-btn-link:hover {
            color: #0e9f6e;
          }

          .ant-btn-link:focus {
            color: #0e9f6e;
          }

          .ant-pagination {
            width: 100% !important;
          }

          .ant-pagination-item {
            background-color: white !important;
            border-color: #046c4e !important;
          }
          .ant-pagination-item a {
            color: #046c4e !important;
          }

          .ant-pagination-item-active {
            border-color: #0e9f6e !important;
            background-color: #0e9f6e !important;
          }

          .ant-pagination-item-active a {
            color: white !important;
          }

          .table-responsive {
            overflow-x: auto;
            margin-bottom: 20px;
          }

          .table-responsive::-webkit-scrollbar {
            height: 8px;
          }

          .table-responsive::-webkit-scrollbar-thumb {
            background-color: #0e9f6e;
            border-radius: 4px;
          }

          .table-responsive::-webkit-scrollbar-track {
            background: #f0fdf4;
          }

          @media (max-width: 640px) {
            .flex-wrap {
              flex-direction: column;
            }

            .table-responsive {
              margin-bottom: 12px;
            }

            .ant-table-thead > tr > th,
            .ant-table-tbody > tr > td {
              white-space: nowrap;
            }
          }
        `}</style>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageServices;
