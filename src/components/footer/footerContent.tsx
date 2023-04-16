import { merriWeather } from "@/public/fonts";
import React from "react";

export default function FooterContent({
  linksList,
  title,
}: {
  linksList: { title: string }[];
  title: string;
}) {
  return (
    <div>
      <h1 className={`text-[18px] ${merriWeather.className} font-[400]`}>
        {title}
      </h1>
      {linksList?.map((v, i) => (
        <div key={i} className="my-2">
          <p className={`${merriWeather.className} text-[13px] font-[300]`}>
            {v?.title}
          </p>
        </div>
      ))}
    </div>
  );
}
