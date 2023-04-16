"use client";
import React, { useState } from "react";
import Image from "next/image";
import { merriWeather, notoSans } from "@/public/fonts";
import { TGovernor } from "@/type";
export default function HumanDropdown({
  title,
  img,
  name,
  yearOfAppointment,
}: TGovernor) {
  return (
    <div className="p-2.5 pr-8">
      <div>
        <p className={`${merriWeather.className} text-[22px] font-[300]`}>
          {title}
        </p>
      </div>
      <div>
        <div className="relative w-full h-[180px]">
          <Image alt=":(" src={`${img}`} fill />
        </div>
        <p className={`${notoSans.className} text-[16px] font-[600]`}>{name}</p>
        <p className={`${notoSans.className} text-[15px] font-[400]`}>
          {yearOfAppointment}
        </p>
      </div>
    </div>
  );
}
