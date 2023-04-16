import { TPhoto } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function PhotoCard({ data }: { data: TPhoto[] }) {
  return (
    <div className="flex flex-wrap items-center border">
      {data?.map((v) => (
        <Link
          key={v.id}
          href={`/photo-bank/${v.id}`}
          className="group relative w-[25%] h-[200px] cursor-pointer"
        >
          <div className="w-full group-hover:z-[2] bg-[#00000067] h-full absolute flex justify-center items-center">
            <AiOutlineSearch className="text-[50px] text-white" />
          </div>
          <Image src={`${v.img}`} alt="" fill quality={100} />
        </Link>
      ))}
    </div>
  );
}
