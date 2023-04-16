"use client";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "./../styles/react-quill-snow.css";

function QuillEditor({
  setQuillData,
  quillData,
}: {
  quillData: string;
  setQuillData: (value: string) => void;
}) {
  const [value, setValue] = useState("");

  const EditorModule = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const EditorFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <div className="h-auto">
      <ReactQuill
        modules={EditorModule}
        formats={EditorFormats}
        theme="snow"
        value={quillData}
        onChange={setQuillData}
      />
    </div>
  );
}

export default QuillEditor;
