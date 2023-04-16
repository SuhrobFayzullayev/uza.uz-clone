"use client";
import { useContext, useEffect, useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleSave } from "@/redux/slices/postSlice";

export default function ToggleSave({ id, size }: { id: number; size: number }) {
  const dispatch = useAppDispatch();
  const postSelector = useAppSelector((state) => state.post.data);
  const isSave = postSelector.filter((v) => v.id == id)?.[0]?.isSave;

  const addFavoritePost = (id: number) =>
    dispatch(toggleSave({ id, isSave: !isSave }));

  return (
    <button
      onClick={() => addFavoritePost(id)}
      style={{
        color: (isSave && "#3A58F6") || "#A4A7AB",
      }}
      className=" flex"
    >
      <BsBookmark
        className="cursor-pointer"
        style={{ fontSize: `${size}px` }}
      />
    </button>
  );
}
