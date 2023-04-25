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
                src="https://firebasestorage.googleapis.com/v0/b/uza-uz.appspot.com/o/app-store.368d07f4.jpg?alt=media&token=6b315d72-41b9-4097-8ab6-9152fb3c61ff"
                fill
              />
            </Link>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.uza_uz&hl=ru&gl=US"
              }
              className="h-[80px] w-[170px] relative"
            >
              <Image
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/uza-uz.appspot.com/o/google-play.6f810925.jpg?alt=media&token=19fdd6bc-cfa7-4e4d-880d-144ed7d20c98"
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
