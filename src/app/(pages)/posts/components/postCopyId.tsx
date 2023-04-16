import React from "react";
import { BsTelegram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { merriWeather } from "@/public/fonts";
import { notification } from "antd";

export default function PostCopyId({ id }: { id: number | string }) {
  return (
    <div className=" mx-auto h-[70px] w-11/12 bg-[#F5F5F6]">
      <div className="h-[3px] w-full bg-[#DAEBED]"></div>
      <div className="w-full h-full flex justify-between items-center py-3 px-4">
        <div className="w-[100px] flex items-center justify-between">
          <AiFillFacebook className="text-[30px] rounded-[50px] text-[#2574FF]" />
          <FaTwitterSquare className="text-[28px] mt-0.5 rounded-[50px] text-[#1DA1F2]" />
          <BsTelegram className="text-[26px] mt-0.5 text-[#1DA1F2]" />
        </div>
        <div className="bg-white rounded-md shadow-md flex justify-between items-center h-full w-auto px-4">
          <p
            className={`${merriWeather.className} text-[13px] font-[700] mr-4`}
          >
            {id}
          </p>
          <div
            onClick={() => {
              navigator.clipboard.writeText(id.toString());
              notification.success({ message: "Post id copied", duration: 2 });
            }}
            className={`${merriWeather.className} cursor-pointer text-[13px] font-[700] text-[#5291FF]`}
          >
            Нусха олиш
          </div>
        </div>
      </div>
    </div>
  );
}
