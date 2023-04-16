"use client";
import ModalComponent from "@/components/modalComponent";
import { notoSans } from "@/public/fonts";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button } from "antd";
import React, { useState } from "react";
import AddPhotoForm from "./component/addPhotoForm";
import { addPhoto } from "@/redux/slices/photoSlice";
import PhotoCard from "./component/photoCard";

export default function Page() {
  const photoSelector = useAppSelector((state) => state.photo.data);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const addNewPhoto = (values: any) => {
     dispatch(addPhoto(values));
  };

  return (
    <div className="bg-white">
      <div className="p-14 flex justify-between ">
        <h1 className={`${notoSans.className} text-[22px] font-[600] w-[50%]`}>
          Ўзбекистон Миллий ахборот агентлигининг фотосуратлари
        </h1>
        <Button onClick={() => setIsModalOpen(true)} type="primary">
          Add Photo
        </Button>
      </div>
      <PhotoCard data={photoSelector} />

      {isModalOpen && (
        <ModalComponent
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title="Add Photo"
          width={700}
        >
          <AddPhotoForm addNewPhoto={addNewPhoto} />
        </ModalComponent>
      )}
    </div>
  );
}
