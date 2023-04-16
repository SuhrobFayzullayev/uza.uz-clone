import Image from "next/image";
import Link from "next/link";
import React from "react";
import Date from "../date";
import { BsEyeglasses, BsTelegram } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineWifi, AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import SearchBar from "./searchBar";
import { notoSans } from "@/public/fonts";

export default function Header() {
  return (
    <div className="flex py-2">
      <div className="px-2 w-[24.9%]">
        <Link href="/">
          <Image
            src="https://uza.uz/static/media/uza-logo.d02b4538.svg"
            alt=":("
            width={220}
            height={150}
          />
        </Link>
      </div>
      <div className="justify-between items-ends flex pt-8 w-full">
        <div className="w-[65%]">
          <div className="flex justify-between h-2/5">
            <Date />
            <div className="flex w-[130px] justify-between items-start overflow-hidden">
              <BsEyeglasses className="text-[#6D7278] text-[30px]" />
              <AiOutlineWifi className="text-[#FF9800] text-[23px] rotate-[47deg] mt-1" />
              <Image
                className="w-[25px] h-[25px]"
                alt=":("
                width={8}
                height={8}
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMzowMjoyNyAxODoyMjo0M0TSyCgAAAHcSURBVDhPrZTdK4NRHMe/j4wLmzK78JKZvEXe3xIirlyQxIXiX6O4cKUUKUpElDDvYW+2kSG2G9qyXbDvj80zoj3Lp85znuec53zPOd/f7xwlFAq94R9J+6z/jZQFL20OTM3M4skf+Gz5IGXBwsJ8vEXNWlhaThBNWdCg12NooP+HqBIMBjUFxe25ht3pkloNJxgfG9G2wrWNLaysruPxyY+K8lI0N9ZDp9NJn8VSJHXSgts7u7A7XCIyMTaKvp4uPL+8IBKJiHhne5v8J1t+fQ3DeniMS7tDGutqqtHS1CDvhP7MzS+itqYqPtBmd2J9c1vEKB5DVrh/eISTs3NYis1S9g+OsWc9kh+IzeGUuqXxa5KCgjx0tLcmiBFZ4eT0LEos5ngnvfJ4r5FrNMq3PxBAtsGA0eFB+f6LXz1kOiiKIoXvyZLOBz2jhxxMYua3Nn9skdtnP73OzMyQNgbE47kRX9XICjmQHbe+O1y5vQlihHYQeh3D57uXyDMwapJObA4+PbuIRr8+ngH0mruprChDb3entGk6KTEBngqTyRgNWo5kRzgciaeU5qN3d/+Ak9NzuKNZoEavz5KE1yyohgnPi4FZwIvClGvUdpbVMMrfxUjKgozydzEAeAdJxua1tna/1QAAAABJRU5ErkJggg=="
                }
              />
            </div>
          </div>
          <SearchBar />
        </div>
        <div className="w-[30%] flex justify-end flex-wrap">
          <div className="flex h-1/2 w-4/6 justify-between items-start">
            <AiFillFacebook className="text-[30px] rounded-[50px] text-[#2574FF]" />
            <FaTwitterSquare className="text-[28px] mt-0.5 rounded-[50px] text-[#1DA1F2]" />
            <FaInstagramSquare className="text-[26px] mt-0.5 text-[#272755]" />
            <AiFillYoutube className="text-[30px] text-[red]" />
            <BsTelegram className="text-[26px] mt-0.5 text-[#1DA1F2]" />
          </div>
          <Link
            href="/user"
            className="border flex items-center h-1/2 rounded-full w-[150px]"
          >
            <div className=" h-full w-[50px] border-l-0  flex justify-center items-center border rounded-full">
              <BiUserCircle className="text-[#B1CAE6] text-[28px]" />
            </div>
            <p className={`ml-4 ${notoSans.className} text-[14px] font-[500]`}>
              Кабинет
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
