"use client";
import { useState } from "react";
import { merriWeather } from "@/public/fonts";
import PostContent from "@/components/postContent";
import NewsContent from "@/components/newsContent";
import { Button } from "antd";
import ModalComponent from "@/components/modalComponent";
import AddPostForm from "./components/addPostForm";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addPost } from "@/redux/slices/postSlice";

export default function Page() {
  const postSelector = useAppSelector((state) => state.post.data);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addNewPost = (post: any) => {
    dispatch(addPost(post));
  };
  return (
    <>
      {" "}
      <div className="flex">
        <div className="w-[670px]">
          <div className="flex justify-between items-center">
            <h1
              className={`font-[300] text-[22px] ${merriWeather.className} my-4`}
            >
              Янгиликлар
            </h1>
            <Button onClick={() => setIsModalOpen(true)} type="primary">
              Add Post
            </Button>
          </div>

          <PostContent data={postSelector} />
        </div>
        <div className="w-[35%] pl-3">
          <h1
            className={`${merriWeather.className} text-[22px] font-[300] my-4`}
          >
            Долзарб хабарлар
          </h1>
          <NewsContent
          search={false}
            favorites={false}
            flex={false}
            latest={false}
            data={postSelector}
            direction="column"
            width={100}
          />
        </div>
      </div>
      {isModalOpen && (
        <ModalComponent
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title="Add Post"
          width={900}
        >
          <AddPostForm addNewPost={addNewPost} />
        </ModalComponent>
      )}
    </>
  );
}
