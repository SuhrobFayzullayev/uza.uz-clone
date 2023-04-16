"use client";
import Advertising from "@/components/advertising";
import NotFoundData from "@/components/notFoundData";
import PostContent from "@/components/postContent";
import { useAppSelector } from "@/redux/hooks";
import React, { useState, useEffect } from "react";
import Region from "../components/region";

export default function Page({
  params: { path },
}: {
  params: { path: string };
}) {
  const regionSelector = useAppSelector((state) => state.region);
  const postSelector = useAppSelector((state) =>
    state.post.data.filter((v) => v.regions == path)
  );
  const [region, setRegion] = useState(regionSelector);

  useEffect(() => {
    setRegion([...region].filter((v) => v.path == path));
  }, [path, region]);

  const { aboutState, area, governor, img, population, title } =
    region?.[0] || {};

  return (
    <>
      {region.length == 0 ? (
        <NotFoundData />
      ) : (
        <>
          <Advertising height={340} radius={20} img={`${img}`} title={title} />
          <div className="flex mt-4">
            <PostContent data={postSelector} />
            <Region
              aboutState={aboutState}
              population={population}
              area={area}
              governor={governor}
            />
          </div>
        </>
      )}
    </>
  );
}
