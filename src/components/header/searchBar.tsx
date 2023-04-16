"use client";
import { useState } from "react";
import { notoSans } from "@/public/fonts";
import { Input } from "antd";
import { useRouter } from "next/navigation";
import { GoSearch } from "react-icons/go";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const onSearch = () => {
    if (value) router.push(`/search?q=${value.trim()}`);
    else router.push(`/search`);
  };

  return (
    <div className="w-full h-3/5 pt-1.5">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onPressEnter={onSearch}
        className={`${notoSans.className} font-[500] px-3 text-[16px] shadow-none h-full border-none`}
        size="large"
        placeholder="Сайт бўйлаб излаш"
        prefix={<GoSearch className="text-[20px] text-[#909397] mr-1" />}
      />
    </div>
  );
}
