"use client";
import { notFound } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import PostCopyId from "../components/postCopyId";
import { merriWeather, notoSans } from "@/public/fonts";
import { MdOutlineTimer } from "react-icons/md";
import { BsBookmark, BsPrinter } from "react-icons/bs";
import Image from "next/image";
import { FaRegDotCircle } from "react-icons/fa";
import { useAppSelector } from "@/redux/hooks";
import ToggleSave from "../components/toggleSave";

export default function Page({
  params: { postId },
}: {
  params: { postId: number };
}) {
  const postSelector = useAppSelector((state) => state.post.data);
  const [post, setPost] = useState(postSelector);

  useEffect(() => {
    setPost([...post].filter((v) => v.id == postId));
  }, [postId, post]);

  if (post.length == 0) notFound();

  const { title, img, text, description, id, time, date, categories, isSave } =
    post[0];

  console.log(id);

  return (
    <div className="p-12 bg-white">
      <div className="px-14">
        <h1
          className={`${merriWeather.className} text-[33px] text-[#1b4586] font-[400]`}
        >
          {title}
        </h1>
      </div>
      <div className="mt-7 flex justify-between">
        <div className="relative w-[80%] h-[500px]">
          <Image fill alt=":(" src={`${img}`} />
        </div>
        <div className=" pl-8 pt-4 w-[20%]">
          <div className={`flex items-center w-full my-4`}>
            <FaRegDotCircle className="text-[16px] text-[#1b4586] mr-1.5" />
            <span
              className={`${notoSans.className} text-[12px] font-[300] text-[#8e8e8e]`}
            >
              {categories?.text}
            </span>
          </div>
          <div className="w-full flex  items-center -ml-0.5 justify-start -mt-1">
            <ToggleSave id={postId} size={20} />{" "}
            <span
              className={`${notoSans.className} mt-2 text-[12px] font-[300] text-[#8e8e8e]`}
            >
              {(isSave && "Танланган") || "Танлаш"}
            </span>
          </div>
          <div className="w-full items-center flex my-4 ">
            <BsPrinter className="cursor-pointer text-[#1b4586] mr-1.5 text-[16px]" />
            <span
              className={`${notoSans.className} text-[12px] font-[300] text-[#8e8e8e]`}
            >
              Чоп этиш
            </span>
          </div>
          <div className="w-full items-center flex my-4 ">
            <MdOutlineTimer className="cursor-pointer text-[#1b4586] mr-1.5 text-[16px]" />
            <span
              className={`${notoSans.className} text-[12px] font-[300] text-[#8e8e8e]`}
            >
              {time} / {date}
            </span>
          </div>
        </div>
      </div>
      <div className="p-10">
        <p className={`${merriWeather.className} mb-7 text-[16px] font-[700]`}>
          {text}
        </p>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
      <PostCopyId id={`${window?.location?.origin}/posts/${id}`} />
    </div>
  );
}
