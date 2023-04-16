import React from "react";
import { merriWeather, notoSans } from "@/public/fonts";
import { MdOutlineTimer } from "react-icons/md";

import Image from "next/image";

type TProps = {
  img: string;
  date: string;
  time: string;
  title: string;
  id: number;
  activeAudioId: number;
  changeAudioFunc: (id: number) => void;
};

export default function AudioCard({
  img,
  date,
  time,
  title,
  id,
  changeAudioFunc,
  activeAudioId,
}: TProps) {
  return (
    <>
      <button
        onClick={() => changeAudioFunc(id)}
        className={`${
          id == activeAudioId ? "bg-[#d3e7ff] active" : "bg-[#F1F1F1]"
        } audio  cursor-pointer group relative overflow-hidden transition duration-300 hover:bg-[#d3e7ff] mx-auto my-2 rounded-2xl px-6 py-5 w-full h-auto flex justify-between items-center`}
      >
        <div
          className="group-hover:-left-0 top-0 h-full w-2 bg-[#1565D8] left-slide absolute -left-2"
          style={{ transition: "all 0.1s" }}
        ></div>
        <div className="flex justify-between items-center">
          <div className="relative w-[85px] h-[80px] flex justify-center items-center">
            <Image
              fill
              src={img}
              alt="Picture of the author"
              className="rounded-[50%]"
            />
          </div>
          <div className="w-full pl-5">
            <p
              className={`${merriWeather.className} leading-7 text-left text-[16px] font-[400] mb-1`}
            >
              {title}
            </p>
            <div className="flex">
              <MdOutlineTimer className="mr-1 text-[#45668C]" />
              <span
                className={`${notoSans.className} text-[12px] text-[#6D7278] mr-1`}
              >
                {time}
              </span>
              <span
                className={`${notoSans.className} text-[12px] text-[#6D7278]`}
              >
                {"/"}
              </span>
              <span
                className={`${notoSans.className} text-[12px] ml-1 text-[#6D7278]`}
              >
                {date}
              </span>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}
