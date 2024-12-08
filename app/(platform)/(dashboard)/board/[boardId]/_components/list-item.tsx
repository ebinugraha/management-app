"use client";

import { ListWithCard } from "@/types";
import { ListHeader } from "./list-header";
import { ElementRef, useRef, useState } from "react";

export const ListItem = ({ data }: { index: number; data: ListWithCard }) => {
  const textAreaRef = useRef<ElementRef<"textarea">>(null);

  const [isEditing, setIsEditing] = useState(false);

  const disableEditing = () => {
    setIsEditing(false);
  };
  
  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textAreaRef.current?.focus();
    });
  };

  if(isEditing && 5){
    return (
      <div className="mt-2">
        <textarea
          ref={textAreaRef}
          onChange={disableEditing}
          className="w-full rounded-md bg-transparent px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter list title..."
          defaultValue={data.title}
        />
      </div>
    );
  }

  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className="w-full rounded-md bg-[#f1f2f4] shadow-sm pb-2">
        <ListHeader onAddCard={enableEditing} dataList={data} />
      </div>
    </li>
  );
};
