import React from "react";
import Image from "next/image";
export default function NotFoundData() {
  return (
    <div className="relative w-full  h-[300px]">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/uza-uz.appspot.com/o/Screenshot%20(234).png?alt=media&token=14a23340-3baf-4685-a63a-916b2041c0d0"
        fill
        alt=":("
      />
    </div>
  );
}
