"use client";
import NewsContent from "@/components/newsContent";
import PostContent from "@/components/postContent";
import { merriWeather } from "@/public/fonts";
import { useAppSelector } from "@/redux/hooks";
import { TPosts } from "@/type";
import React, { useEffect, useState } from "react";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const postSelector = useAppSelector((state) =>
    state.post.data.filter((v) => v.categories?.path == slug)
  );

  return (
    <div className="flex">
      <div className="w-[670px]">
        <PostContent data={postSelector} />;
      </div>
      <div className="w-[35%] pl-3">
        <h1 className={`${merriWeather.className} text-[22px] font-[400] mb-4`}>
          Долзарб хабарлар
        </h1>
        <NewsContent
          search={false}
          favorites={false}
          flex={false}
          latest={false}
          data={postSelector}
          direction="column"
          width={100}
        />
      </div>
    </div>
  );
}
