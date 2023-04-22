import { useAppSelector } from "@/redux/hooks";
import { Button, Form, Input, notification } from "antd";
import React from "react";

type TAddAudioForm = {
  title: string;
  image: string;
  audio: string;
};

export default function AddAudioForm({
  addAudios,
}: {
  addAudios: (title: string, image: string, audio: string) => void;
}) {
  const [form] = Form.useForm();

  const onFinish = ({ title, image, audio }: TAddAudioForm) => {
    // if(image.trim())
    if (image.trim().slice(0, 18) == "https://cdn.uza.uz") {
      if (title.trim() && image.trim() && audio.trim()) {
        addAudios(title.trim(), image.trim(), audio.trim());
        form.resetFields();
        notification.success({
          message: "New image added successfully",
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
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please enter audio title!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Image"
        name="image"
        rules={[{ required: true, message: "Please enter audio image!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Audio"
        name="audio"
        rules={[{ required: true, message: "Please enter audio voise!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button className="bg-[#1677FF]" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
