"use client";
import Advertising from "@/components/advertising";
import NewsContent from "@/components/newsContent";
import { merriWeather, notoSans } from "@/public/fonts";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { FaRegDotCircle } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import ToggleSave from "../posts/components/toggleSave";
import { useEffect, useState } from "react";

export default function Home() {
  const postSelector = useAppSelector((state) => state.post.data);
  const [post, setPost] = useState<any>([]);
  useEffect(() => {
    setPost(postSelector);
  }, [postSelector]);

  const { img, categories, time, date, title, text, id } = post?.[0] || {};

  return (
    <div className="">
      <div className="flex bg-white mb-6">
        <div className="w-[50%] p-4">
          <div className="relative h-[300px] mt-2.5 ">
            <div
              className={`absolute top-5 left-5 py-3 px-5 rounded-full text-white text-[15px] font-[400] bg-[#182F53] z-10 ${merriWeather.className}`}
            >
              Асосий янгиликлар
            </div>
            {img && <Image src={`${img}`} alt="" className="rounded-md" fill />}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-center my-3">
              <FaRegDotCircle
                className={`${notoSans.className} mt-1 text-[12px] font-[300] text-[#0f2a54]`}
              />
              <p
                className={`${notoSans.className} mx-2 text-[12px] font-[300] text-[#0f2a54]`}
              >
                {categories?.text}
              </p>
            </div>
            <div className="flex items-center">
              <ToggleSave id={id} size={14} />
              <MdOutlineTimer
                className={`${notoSans.className} text-[12px] mx-2 font-[300]`}
              />
              <p className={`${notoSans.className} text-[12px] font-[300]`}>
                {time} / {date}
              </p>
            </div>
          </div>
          <div>
            <p className={`${merriWeather.className} text-[20px] font-[600]`}>
              {title}
            </p>
            <p className={`${notoSans.className} text-[14px] font-[300] mt-3`}>
              {text}
            </p>
          </div>
        </div>
        <NewsContent
          search={false}
          favorites={false}
          flex={false}
          latest={false}
          width={50}
          direction="rows"
          data={postSelector}
        />
      </div>

      <Advertising
        img="https://ads.uza.uz/www/images/23a9cc81508186fd9c5b2a84ebc0812b.png"
        height={120}
        radius={0}
      />
      <div className="flex justify-between my-5">
        <div className="w-[45%]">
          <h1
            className={`${merriWeather.className} text-[22px] font-[300] mb-3 mt-4`}
          >
            Сўнгги янгиликлар
          </h1>
          <NewsContent
            search={false}
            favorites={false}
            flex={false}
            latest={true}
            width={98}
            direction="rows"
            data={postSelector}
          />
        </div>
        <div className="w-[55%]">
          <h1
            className={`${merriWeather.className} text-[22px] font-[300] mb-3 mt-4`}
          >
            Муҳаррир танлови
          </h1>
          <NewsContent
            search={false}
            favorites={false}
            flex={false}
            latest={false}
            width={100}
            direction="rows"
            data={postSelector}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
