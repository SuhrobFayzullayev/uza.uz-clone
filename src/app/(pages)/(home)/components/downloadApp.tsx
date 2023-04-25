import Advertising from "@/components/advertising";
import { notoSans } from "@/public/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DownloadApp() {
  return (
    <div>
      <div className="my-4 relative shadow-lg rounded-[10px]">
        <div className="absolute z-[1] top-10 left-10 w-[40%]">
          <p className={`${notoSans.className} text-[20px] font-[400] mb-3`}>
            Расмий янгиликлардан энг биринчи хабардор бўлишни истасангиз,
            смартфонингизга UZA мобил иловасини юклаб олинг
          </p>
          <div className="flex justify-between items-center w-[360px]">
            <Link
              href={"https://apps.apple.com/jp/app/uza-uz/id1645681430?l=en"}
              className="h-[80px] w-[170px] relative"
            >
              <Image
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/uza-uz.appspot.com/o/app-store.368d07f4.png?alt=media&token=729cd79b-f1d8-47c9-9653-4ab13b152b1a"
                fill
              />
            </Link>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.uza_uz&hl=ru&gl=US"
              }
              className="h-[80px] w-[170px] relative bg-white rounded-full"
            >
              <Image
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/uza-uz.appspot.com/o/google-play.6f810925-removebg-preview.png?alt=media&token=f120bb05-c268-40e0-a4b3-eb610df08dcd"
                fill
              />
            </Link>
          </div>
        </div>
        <Advertising
          img="https://uza.uz/static/media/banner-footer.6ee3f013.jpg"
          radius={10}
          height={250}
        />
      </div>
    </div>
  );
}
