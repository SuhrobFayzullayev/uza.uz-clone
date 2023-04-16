import { notoSans } from "@/public/fonts";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TProps = {
  title: string;
  links: { text: string; path: string }[];
  route: string;
};

export default function LinkDropdown({ title, links, route }: TProps) {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen((prev) => (prev ? false : true));

  const pathname = usePathname();

  return (
    <>
      <button
        onClick={handleOpen}
        className={`cursor-pointer px-5 w-full h-[50px] flex justify-between rounded-l-full ${
          open ? "bg-[#E9E9E9]" : "bg-[#F7F7F7]"
        } 
    items-center`}
      >
        <p className={`${notoSans.className} text-[15px] font-[500]`}>
          {title}
        </p>
        <BsChevronDown
          className={`${!open && "-rotate-[90deg]"} text-[#6f6f6f]`}
        />
      </button>
      <ul className={`${(!open && "hidden") || "block"} list-disc pb-3 pl-16 `}>
        {links.map((v, i) => (
          <li
            key={i}
            className={`py-1 hover:text-[#0f2a54] ${
              "/" + route + "/" + v.path == pathname
                ? "text-[#0f2a54]"
                : "text-[#949494]"
            }`}
          >
            <Link
              className={`block ${notoSans.className} ${
                "/" + route + "/" + v.path == pathname
                  ? "text-[#0f2a54]"
                  : "text-[#1e1e1e]"
              } font-[500] text-[14px] text-[1e1e1e] hover:text-[#0f2a54]`}
              href={`/${route}/${v.path}`}
            >
              {v.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
