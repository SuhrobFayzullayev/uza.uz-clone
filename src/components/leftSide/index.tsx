"use client";
import { notoSans } from "@/public/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LinkDropdown from "./linkDropdown";

export const links = {
  category: [
    { text: "Сиёсат", path: "politics" },
    { text: "Ҳужжатлар", path: "documents" },
    { text: "Жамият", path: "society" },
    { text: "Иқтисодиёт", path: "business" },
    { text: "Технология", path: "tech" },
    { text: "Илм-фан", path: "science" },
    { text: "Маданият", path: "culture" },
    { text: "Спорт", path: "sport" },
    { text: "Туризм", path: "tourism" },
    { text: "Жаҳон", path: "world" },
  ],
  regions: [
    { text: "Қорақалпоғистон", path: "karakalpakstan" },
    { text: "Тошкент шаҳри", path: "tashkent-city" },
    { text: "Андижон", path: "andijan" },
    { text: "Бухоро", path: "bukhara" },
    { text: "Жиззах", path: "jizzakh" },
    { text: "Қашқадарё", path: "kashqadarya" },
    { text: "Навоий", path: "navoi" },
    { text: "Наманган", path: "namangan" },
    { text: "Самарқанд", path: "samarqand" },
    { text: "Сирдарё", path: "syrdarya" },
    { text: "Сурхондарё", path: "surkhandarya" },
    { text: "Тошкент вилояти", path: "tashkent-region" },
    { text: "Фарғона", path: "fergana" },
    { text: "Хоразм", path: "kharezm" },
  ],
};

export default function LeftSide() {
  const pathname = usePathname();
  console.log(window.location.hostname);

  return (
    <div className="w-[25%]">
      <Link
        href={"/"}
        className={`${
          notoSans.className
        } text-[15px] font-[500] px-5 w-full h-[50px] flex justify-start rounded-l-full ${
          pathname == "/" ? "bg-[#E9E9E9]" : "bg-[#F7F7F7]"
        } items-center`}
      >
        Бош саҳифа
      </Link>
      <Link
        href={"/posts"}
        className={`px-5 w-full h-[50px] flex justify-start rounded-l-full ${
          window.location.pathname.includes("/posts")
            ? "bg-[#E9E9E9]"
            : "bg-[#F7F7F7]"
        } items-center ${notoSans.className} text-[15px] font-[500]`}
      >
        Янгиликлар лентаси
      </Link>
      <Link
        href={"/audio"}
        className={`${
          notoSans.className
        } text-[15px] font-[500] px-5 w-full h-[50px] flex justify-start rounded-l-full ${
          pathname == "/audio" ? "bg-[#E9E9E9]" : "bg-[#F7F7F7]"
        } items-center`}
      >
        Аудио хабарлар
      </Link>
      <LinkDropdown route="category" title={"Рукнлар"} links={links.category} />
      <LinkDropdown route="regions" title={"Ҳудудлар"} links={links.regions} />

      <Link
        href={"/photo-bank"}
        className={`${
          notoSans.className
        } text-[15px] font-[500] px-5 w-full h-[50px] flex justify-start rounded-l-full ${
          pathname == "/photo-bank" ? "bg-[#E9E9E9]" : "bg-[#F7F7F7]"
        } items-center`}
      >
        Фотобанк
      </Link>
      <Link
        href={"/favorites"}
        className={`${
          notoSans.className
        } text-[15px] font-[500] px-5 w-full h-[50px] flex justify-start rounded-l-full ${
          pathname == "/favorites" ? "bg-[#E9E9E9]" : "bg-[#F7F7F7]"
        } items-center`}
      >
        Танлаганларим
      </Link>
    </div>
  );
}
