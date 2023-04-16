import { notoSans } from "@/public/fonts";
import { MdOutlineTimer } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { TPosts } from "@/type";
import ToggleSave from "@/app/(pages)/posts/components/toggleSave";

type TPostCard = {
  data: TPosts;
  allData: TPosts[];
  index: number;
};
export default function PostCard({ data, allData, index }: TPostCard) {
  const { date, time, title, img, id } = data;
  return (
    <div
      className={`border border-r-0 border-t-0 px-5 pb-5 relative`}
      style={{
        paddingTop: data.date !== allData[index - 1]?.date ? "60px" : "20px",
      }}
    >
      {data.date !== allData[index - 1]?.date && (
        <div
          className={`flex justify-between items-center absolute -left-2.5 w-[100px]`}
          style={{ top: index == 0 ? "0px" : "15px" }}
        >
          <FaRegDotCircle className="text-[20px] bg-white" />
          <span
            className={`${notoSans.className} text-[14px] font-[300] text-[#8e8e8e]`}
          >
            {date}
          </span>
        </div>
      )}

      <div
        style={{
          top: date !== allData[index - 1]?.date ? "60px" : "25px",
        }}
        className="flex justify-between items-center absolute left-[-56px] w-[65px]"
      >
        <span
          className={`${notoSans.className} text-[14px] font-[300] text-[#8e8e8e]`}
        >
          {time}
        </span>
        <div className="inline p-0.5 bg-white shadow-md rounded-full">
          <MdOutlineTimer className="text-[14px]" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="relative w-[130px] h-[85px] rounded-md overflow-hidden">
          <Image alt=":(" fill src={`${img}`} />
        </div>
        <div className="w-[80%]">
          <Link href={`/posts/${id}`}>
            <h1
              className={`${notoSans.className} w-[90%] font-[500] text-[18px] hover:text-[#0f2a54] ml-4 mt-1`}
            >
              {title}
            </h1>
          </Link>
        </div>
        <ToggleSave size={20} id={id!} />
      </div>
    </div>
  );
}
