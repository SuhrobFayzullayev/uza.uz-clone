"use client";
import { notoSans } from "@/public/fonts";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const photoSelector = useAppSelector((state) => state.photo.data);
  const [photo, setPhoto] = useState(photoSelector);
  useEffect(
    () => setPhoto([...photo].filter((v) => v.id.toString() == slug)),
    [slug, photo]
  );

  const { author, category, date, id, img, pixels, region, size, title } =
    photo?.[0] || {};

  if (photo.length == 0) notFound();
  return (
    <div className="bg-white pt-10">
      <div className="flex h-[500px] overflow-auto">
        <div className="w-[70%] h-full p-12 bg-[#E5E6E7]">
          <div className="w-full h-full relative">
            <Image src={`${img}`} alt="" fill />
          </div>

          <p
            className={`mt-3 ${notoSans.className} font-[300] text-[12px] text-[#3a4046]`}
          >
            Фото ID: {id}
          </p>
        </div>
        <div className="w-[30%] px-5 h-full  flex flex-wrap items-stretch">
          <div>
            <p
              className={`${notoSans.className} text-[14px] font-[400] text-[#606071]`}
            >
              Фотосурат ҳажмини танланг
            </p>
            <div className="border py-4 px-6 mt-4 rounded-2xl">
              <p
                className={`${notoSans.className} text-[14px] font-[300] text-[#606071]`}
              >
                Ҳажми • {size}
              </p>
              <p
                className={`${notoSans.className} text-[14px] font-[300] text-[#606071]`}
              >
                pixels {pixels} cm • JPG
              </p>
            </div>
          </div>
          <div className="w-full pt-[230px]">
            <p className={`${notoSans.className} text-[14px] font-[400]`}>
              Ушбу фотосуратнинг оригинал файлини 36,750сум эвазига ёки тўплам
              харид қилиш орқали юклаб олишингиз мумкин!
            </p>
            <div className="bg-[#0F2A54] h-[50px] flex justify-center items-center mt-4 rounded-xl text-white">
              <p className={`${notoSans.className} text-[14px] font-[300]`}>
                Юклаб олиш
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-12 w-[70%] ">
        <h1 className={`${notoSans.className} text-[18px] font-[700]`}>
          {title}
        </h1>
        <div className="flex items-center mt-5 ">
          <FaUserAlt className="text-[40px]" />
          <p
            className={`${notoSans.className} text-[#0f2a54] text-[14px] font-[300] ml-3`}
          >
            {author}
          </p>
        </div>
        <p
          className={`${notoSans.className} mt-5 text-[#0f2a54] text-[14px] font-[300]`}
        >
          Олинган санаси: {date}
        </p>
        <p
          className={`${notoSans.className} mt-2 text-[#0f2a54] text-[14px] font-[300]`}
        >
          Рукн: {category}
        </p>
        <p
          className={`${notoSans.className} mt-2 text-[#0f2a54] text-[14px] font-[300]`}
        >
          Олинган жойи: {region}
        </p>
      </div>
    </div>
  );
}
