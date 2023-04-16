"use client";
import NewsContent from "@/components/newsContent";
import { merriWeather } from "@/public/fonts";
import { useAppSelector } from "@/redux/hooks";
import React, { useState, useEffect } from "react";
import NotFoundData from "@/components/notFoundData";
export default function Page() {
  const postSelector = useAppSelector((state) => state.post.data);

  const [favorites, setFavorites] = useState(postSelector);
  useEffect(() => {
    setFavorites([...postSelector]?.filter((v) => v.isSave == true));
  }, [postSelector]);

  return (
    <div>
      <h1 className={`${merriWeather.className} text-[22px] font-[300] my-3`}>
        Танлаган мақолаларим
      </h1>
      {favorites.length == 0 ? (
        <NotFoundData />
      ) : (
        <NewsContent
          favorites={true}
          data={favorites}
          latest={false}
          width={100}
          direction="column"
          flex={true}
          search={false}
        />
      )}
    </div>
  );
}
