import { merriWeather, notoSans } from "@/public/fonts";
import React from "react";
import { TRegion } from "@/type";
import HumanDropdown from "./humanDropdown";

export default function Region({
  aboutState,
  population,
  area,
  governor,
}: TRegion) {
  return (
    <div className="w-[45%] ">
      <div className=" p-2">
        <div>
          <h1
            className={`text-[22px] font-[600] ${merriWeather.className} mb-3`}
          >
            Ҳудуд ҳақида
          </h1>
          <p className={`${notoSans.className} text-[14px] font-[400]`}>
            {aboutState}
          </p>
        </div>
        <div className="flex justify-start">
          <p
            className={`${notoSans.className} mr-2 text-[16px] mt-2 font-[600]`}
          >
            Аҳолиси:
          </p>
          <span
            className={`${notoSans.className} mt-2.5 text-[14px] font-[400]`}
          >
            {" "}
            {population}
          </span>
        </div>
        <div className="flex justify-start mt-2">
          <p className={`${notoSans.className} mr-2 text-[16px] font-[600]`}>
            Ҳудуди:
          </p>
          <span
            className={`${notoSans.className} mt-0.5 text-[14px] font-[400]`}
          >
            {area?.size}
          </span>
        </div>

        <div className="mt-2">
          <p className={`${notoSans.className} text-[14px]  font-[400]`}>
            {area?.text}
          </p>
        </div>
      </div>
      <HumanDropdown
        title={governor?.title}
        img={governor?.img}
        name={governor?.name}
        yearOfAppointment={governor?.yearOfAppointment}
      />
    </div>
  );
}
