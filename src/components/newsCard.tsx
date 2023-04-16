import { notoSans } from "@/public/fonts";
import { TPosts } from "@/type";
import Image from "next/image";
import React from "react";
import { BsBookmark } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import NewsCardRows from "./newsCardRows";
import NewsCardColumn from "./newsCardColumn";

export default function NewsCard({
  flex,
  categories,
  time,
  date,
  title,
  img,
  direction,
  id,
  isSave,
}: TPosts | any) {
  return (
    <>
      {direction == "rows" ? (
        <NewsCardRows
          id={id}
          categories={categories}
          time={time}
          date={date}
          title={title}
          img={img}
          isSave={isSave}
        />
      ) : (
        <NewsCardColumn
          flex={flex}
          id={id}
          time={time}
          date={date}
          title={title}
          img={img}
          isSave={isSave}
        />
      )}
    </>
  );
}
