import { links } from "@/components/leftSide";
import { useAppSelector } from "@/redux/hooks";
import { Button, Form, Input, Select, Switch, notification } from "antd";
import React, { useState } from "react";

export default function AddPhotoForm({
  addNewPhoto,
}: {
  addNewPhoto: (value: any) => void;
}) {
  const [form] = Form.useForm();
  const dateSelector = useAppSelector((state) => state.date);

  const onFinish = (values: any) => {
    let newCategory = links.category.filter((v) => v.path == values.category);
    let newRegion = links.regions.filter((v) => v.path == values.region);
    values.category = newCategory[0].text;
    values.region = newRegion[0].text;
    values.time = dateSelector.time.slice(0, 5);
    values.date = dateSelector.date;
    values.title.trim();
    values.img.trim();
    values.author.trim();
    values.pixels.trim();
    values.size.trim();
    values.price.trim();


    const { title, img, author, pixels, size, price } = values;
    if (img.slice(0, 18) == "https://cdn.uza.uz") {
      if (title && img && author && pixels && size && price) {
        addNewPhoto(values);
        form.resetFields();
        notification.success({
          message: "New Photo added successully",
          duration: 2,
        });
      }
    } else {
      notification.error({
        message:
          "Added image protocol and hostname 'https://cdn.uza.uz' should look like this",
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
          name="category"
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

      <div className="flex justify-between items-center">
        <Form.Item
          label="Size"
          name="size"
          className="w-[48%]"
          rules={[{ required: true, message: "Please enter image size!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Pixels"
          name="pixels"
          className="w-[48%]"
          rules={[{ required: true, message: "Please enter image pixels!" }]}
        >
          <Input />
        </Form.Item>
      </div>

      <div className="flex justify-between items-center">
        <Form.Item
          label="Author"
          name="author"
          className="w-[48%]"
          rules={[{ required: true, message: "Please enter image author" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          className="w-[48%]"
          rules={[{ required: true, message: "Please enter image price" }]}
        >
          <Input />
        </Form.Item>
      </div>

      <Form.Item className="mt-5">
        <Button className="bg-[#1677FF]" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
