import { merriWeather } from "@/public/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PhotoCollection() {
  return (
    <div className="my-5">
      <div className="flex justify-between items-center my-3">
        <h1 className={`${merriWeather.className} text-[22px] font-[300]`}>
          ЎзА фотобанкидан суратлар
        </h1>
        <Link
          href={"photo-bank"}
          className="flex justify-center items-center w-[200px] h-[40px] border-2 border-[#0f2a54] rounded-md hover:bg-[#0f2a54] hover:text-[white] text-[#0f2a54] "
        >
          Барчасини очиш
        </Link>
      </div>
      <div className="flex justify-between h-[350px]">
        <div className=" w-[25%] flex justify-between flex-wrap">
          <div className="w-[50%] h-[40%] p-2 ">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src={
                  "https://cdn.uza.uz/2023/03/29/09/41/yVC5vy3P42ZZdhCAQdW5XHJcBqexaeRu_front.JPG"
                }
                fill
                alt=""
              />
            </div>
          </div>
          <div className="h-[40%] w-[50%] p-2">
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <Image
                src={
                  "https://cdn.uza.uz/2023/03/29/09/32/Q83cg8H1F8Ex3qFxhgBhAS7qs6aLmzLv_front.JPG"
                }
                fill
                alt=""
              />
            </div>
          </div>
          <div className="h-[60%] w-[100%] p-2">
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <Image
                src={
                  "https://cdn.uza.uz/2023/03/29/07/48/DFtBVoFscPAhRcvplmnr6QAiC2qXWw3V_front.JPG"
                }
                fill
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" w-[25%] flex justify-between flex-wrap">
          <div className="h-[60%] w-[100%] p-2">
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <Image
                src={
                  "https://cdn.uza.uz/2023/03/29/07/29/kuiEOm3ojPXkDZOK5IKxO4iiiyh1RHqy_front.JPG"
                }
                fill
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%] h-[40%] p-2 ">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src={
                  "https://cdn.uza.uz/2023/03/29/07/15/4Sew8Q71X1UDQUHl3eRdKqnqVmJnWoJi_front.JPG"
                }
                fill
                alt=""
              />
            </div>
          </div>
          <div className="h-[40%] w-[50%] p-2">
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <Image
                src={
                  "https://cdn.uza.uz/2023/03/29/06/49/fzeMZDtEylEuwml3j5Qv72liGI264Jjn_front.jpg"
                }
                fill
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" w-[25%] flex justify-between flex-wrap">
          <div className="w-[50%] h-[40%] p-2 ">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src={
                  "https://cdn.uza.uz/2023/03/29/06/36/BC5ehRtzG5EG529iwdKqbDByYATnjoE2_front.JPG"
                }
                fill
                alt=""
              />
            </div>
          </div>
          <div className="h-[40%] w-[50%] p-2">
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <Image
                src={
                  "https://cdn.uza.uz/2023/03/29/06/10/Fn8Qt8Eubl8hxhOtRFiDNuBQimdKoGcC_front.jpg"
                }
                fill
                alt=""
              />
            </div>
          </div>
          <div className="h-[60%] w-[50%] p-2">
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <Image
                src={
                  "https://cdn.uza.uz/2023/03/28/11/51/Gkl2AwPLRjxryg4SeGWazOFTbb0SwvUf_front.jpg"
                }
                fill
                alt=""
              />
            </div>
          </div>
          <div className="h-[60%] w-[50%] p-2">
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <Image
                src={
                  "https://cdn.uza.uz/2023/03/28/10/34/1g2X42OsEpDkjE21QgJcFZVWQOyHDueF_front.JPG"
                }
                fill
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" w-[25%] flex justify-between flex-wrap">
          <div className="h-[60%] w-[50%] p-2">
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <Image
                src={
                  "https://cdn.uza.uz/2023/03/28/10/29/5rw2NrBsrnKfDueeovSeAg6X7IobibRN_front.jpg"
                }
                fill
                alt=""
              />
            </div>
          </div>
          <div className="h-[60%] w-[50%] p-2">
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <Image
                src={
                  "https://cdn.uza.uz/2023/03/28/10/13/8ny4XNgKdtJZuiYtLxI2cIU98dvro6eE_front.JPG"
                }
                fill
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%] h-[40%] p-2 ">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src={
                  "https://cdn.uza.uz/2023/03/28/09/38/gYfuX7NW88lhBwYiyb2Un5iPY13Cvnlw_front.jpg"
                }
                fill
                alt=""
              />
            </div>
          </div>
          <div className="h-[40%] w-[50%] p-2">
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <Image
                src={
                  "https://cdn.uza.uz/2023/03/28/07/27/xpywJA2h7UxouN55k3HMGma0YDo7ciOQ_front.jpg"
                }
                fill
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
