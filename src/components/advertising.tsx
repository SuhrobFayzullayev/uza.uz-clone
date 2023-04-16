import { merriWeather } from "@/public/fonts";
import Image from "next/image";

type TAdvertisingProps = {
  img: string;
  radius: number;
  height: number;
  title?: string;
};

export default function Advertising({
  img,
  radius,
  height,
  title,
}: TAdvertisingProps) {
  return (
    <div
      style={{ height: `${height}px`, borderRadius: `${radius}px` }}
      className={`div relative w-full overflow-hidden`}
    >
      <Image alt=":(" src={img} placeholder="blur" blurDataURL={img} fill />
      <h1
        className={`absolute top-[75%] left-[4%] ${merriWeather.className} text-[30px] font-[500] text-[white]`}
      >
        {title}
      </h1>
    </div>
  );
}
