import ToggleSave from "@/app/(pages)/posts/components/toggleSave";
import { notoSans } from "@/public/fonts";
import { TPosts } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBookmark } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

export default function NewsCardRows({
  categories,
  time,
  date,
  title,
  img,
  id,
  isSave,
}: // handleSave,
TPosts | any) {
  return (
    <div className="p-3 flex bg-white border-b">
      <div className="w-[70%]">
        <div className="flex justify-between items-center">
          <div className="flex justify-center">
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
            <ToggleSave size={15} id={id} />
            <MdOutlineTimer
              className={`${notoSans.className} text-[12px] mx-2 font-[300]`}
            />
            <p className={`${notoSans.className} text-[12px] font-[300]`}>
              {time} / {date}
            </p>
          </div>
        </div>
        <div>
          <Link
            href={`/posts/${id}`}
            className={`${notoSans.className} text-[16px] mt-3 font-[300]`}
          >
            {title}
          </Link>
        </div>
      </div>
      <div className="w-[30%] ml-2 rounded-md overflow-hidden relative h-[90px]">
        <Image src={`${img}`} alt=":(" fill />
      </div>
    </div>
  );
}
