import ToggleSave from "@/app/(pages)/posts/components/toggleSave";
import { notoSans } from "@/public/fonts";
import { TPosts } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBookmark } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";

export default function NewsCardColumn({
  time,
  date,
  title,
  img,
  flex,
  id,
}: TPosts | any) {
  return (
    <div
      style={{
        width: flex ? "25%" : "100%",
        padding: flex ? "5px" : "0px",
      }}
    >
      <div
        className="bg-white mb-5 rounded-md p-3"
        style={{ height: flex ? "95%" : "fit-content" }}
      >
        <div className="w-[100%] rounded-md overflow-hidden relative h-[170px]">
          <Image src={`${img}`} alt=":(" fill />
        </div>
        <div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center my-1">
              <div>
                {" "}
                <ToggleSave size={15} id={id} />
              </div>
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
              {flex
                ? title.length > 80
                  ? title.slice(0, 80) + "..."
                  : title
                : title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
