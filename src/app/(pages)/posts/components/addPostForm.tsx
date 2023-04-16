import { links } from "@/components/leftSide";
import QuillEditor from "@/components/quillEditor";
import { useAppSelector } from "@/redux/hooks";
import { Button, Form, Input, Select, Switch, notification } from "antd";
import React, { useState } from "react";

export default function AddPostForm({
  addNewPost,
}: {
  addNewPost: (value: any) => void;
}) {
  const [form] = Form.useForm();
  const [quillData, setQuillData] = useState("");
  const dateSelector = useAppSelector((state) => state.date);

  const onFinish = (values: any) => {
    let newCategory = links.category.filter((v) => v.path == values.categories);
    values.breaking = values.breaking == undefined ? false : values.breaking;
    values.categories = newCategory[0];
    values.description = quillData.trim();
    values.time = dateSelector.time.slice(0, 5);
    values.date = dateSelector.date;
    values.isSave = false;
    values.title.trim();
    values.img.trim();
    values.text.trim();

    const { title, img, text } = values;
    if (title.trim() && img.trim() && text.trim()) {
      addNewPost(values);
      setQuillData("");
      form.resetFields();
      notification.success({
        message: "New Post added successully",
        duration: 2,
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <div className="flex justify-between items-center">
        <Form.Item
          className="w-[48%]"
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please enter post title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image"
          name="img"
          className="w-[48%]"
          rules={[{ required: true, message: "Please enter post image!" }]}
        >
          <Input />
        </Form.Item>
      </div>
      <div className="flex justify-between items-center">
        <Form.Item
          label="Category"
          name="categories"
          rules={[{ required: true, message: "Please select category" }]}
          className="w-[48%]"
        >
          <Select>
            {links.category.map((v, i) => (
              <Select.Option key={i} value={v.path}>
                {v.text}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Region"
          name="region"
          className="w-[48%]"
          rules={[{ required: true, message: "Please select region" }]}
        >
          <Select>
            {links.regions.map((v, i) => (
              <Select.Option key={i} value={v.path}>
                {v.text}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>

      <Form.Item
        label="Text"
        name="text"
        rules={[{ required: true, message: "Please enter post text!" }]}
      >
        <Input />
      </Form.Item>

      <QuillEditor quillData={quillData} setQuillData={setQuillData} />

      <Form.Item
        className="mt-5"
        label="Is Breaking?"
        valuePropName="checked"
        name="breaking"
      >
        <Switch className="bg-[#888888]" />
      </Form.Item>

      <Form.Item className="mt-5">
        <Button className="bg-[#1677FF]" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
