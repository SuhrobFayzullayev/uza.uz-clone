"use client";
import NewsContent from "@/components/newsContent";
import NotFoundData from "@/components/notFoundData";
import { merriWeather, notoSans } from "@/public/fonts";
import { useAppSelector } from "@/redux/hooks";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const postSelector = useAppSelector((state) => state.post.data);

  const [posts, setPosts] = useState(postSelector);
  const URL = searchParams?.get("q")?.trim().toLowerCase();

  useEffect(() => {
    if (URL) {
      const text: any = [];
      [...posts].map((v) => {
        v.title && v?.title.toLowerCase().includes(URL) && text.push(v);
      });

      setPosts(text);
    } else {
      setPosts(postSelector);
    }
  }, [URL, postSelector, posts]);

  return (
    <>
      <div className="flex justify-between items-center my-5">
        <h1 className={`${merriWeather.className} text-[22px] font-[300]`}>
          #{URL}
        </h1>
        <p className={`${notoSans.className} text-[14px] font-[300]`}>
          Топилган маълумотлар сони: {posts.length}
        </p>
      </div>

      {posts.length == 0 ? (
        <NotFoundData />
      ) : (
        <NewsContent
          search={true}
          data={posts}
          direction="column"
          favorites={false}
          flex={true}
          latest={false}
          width={100}
        />
      )}
    </>
  );
}
