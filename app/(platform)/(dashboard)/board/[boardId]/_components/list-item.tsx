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

  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className="w-full rounded-md bg-[#f1f2f4] shadow-sm pb-2">
        <ListHeader onAddCard={enableEditing} dataList={data} />
      </div>
    </li>
  );
};
