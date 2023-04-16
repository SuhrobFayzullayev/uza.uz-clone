"use cient";
import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";

type TModalComponent = {
  width?: number;
  title: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  children: React.ReactNode;
};

const ModalComponent = ({
  title,
  width = 500,
  isModalOpen,
  setIsModalOpen,
  children,
}: TModalComponent) => {
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ top: 30 }}
        width={width}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalComponent;
