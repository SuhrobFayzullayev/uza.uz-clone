"use client";
import React, { useState, useEffect } from "react";
import { notoSans } from "@/public/fonts";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeDate, changeTime } from "@/redux/slices/dateSlice";
import moment from "moment";

export default function Date() {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const timeSelector = useAppSelector((state) => state.date.time);
  const dateSelector = useAppSelector((state) => state.date.date);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("HH:mm:ss")), 1000;
      setDate(moment().format("D.M.YYYY"));
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    dispatch(changeDate(date.trim()));
    dispatch(changeTime(time.trim()));
  }, [time, date, dispatch]);

  return (
    <div>
      {(loading && <div className="w-40 h-5 bg-gray-200 rounded-md"></div>) || (
        <p className={`${notoSans.className} text-[12px] text-[#454545]`}>
          {dateSelector} | {timeSelector}
        </p>
      )}
    </div>
  );
}
