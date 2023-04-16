"use client";
import { merriWeather } from "@/public/fonts";
// import { TPostsIState } from "@/type";
import React, { useEffect, useState } from "react";
import NewsCard from "./newsCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TPosts } from "@/type";
import moment from "moment";
// import { changeAllData } from "@/redux/slices/postSlice";

export default function NewsContent({
  direction,
  data,
  width,
  latest,
  flex,
  favorites = false,
  search,
}: {
  direction: string;
  data: TPosts[];
  width: number;
  latest: boolean;
  flex: boolean;
  favorites: boolean;
  search: boolean;
}) {
  const [news, setNews] = useState<TPosts[]>([]);
  const dateSelector = useAppSelector((state) => state.date.date);

  useEffect(() => {
    setNews([...data].filter((v) => v.breaking == true));
    if (latest) setNews(data.filter((v) => v?.date == dateSelector));
    if (favorites) setNews(data.filter((v) => v?.isSave == true));
    if (search) setNews(data);
  }, [data, dateSelector, latest, favorites, search]);

  return (
    <div
      style={{ width: `${width}%`, display: `${flex ? "flex" : "block"}` }}
      className="flex-wrap"
    >
      {news?.map((v, i) => (
        <NewsCard
          isSave={v.isSave}
          id={v.id}
          direction={direction}
          categories={v.categories}
          date={v.date}
          img={v.img}
          time={v.time}
          title={v.title}
          key={i}
          flex={flex}
        />
      ))}
    </div>
  );
}
