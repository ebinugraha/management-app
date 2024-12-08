"use client";

import { updateList } from "@/actions/update-list";
import { FormInput } from "@/components/form/form-input";
import { useAction } from "@/hooks/user-action";
import { List } from "@prisma/client";
import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";
import { useEventListener } from "usehooks-ts";
import { ListOptions } from "./list-options";

export const ListHeader = ({ dataList, onAddCard }: { dataList: List, onAddCard:  () => void }) => {
  const [title, setTitle] = useState(dataList.title);
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onkeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      formRef.current?.requestSubmit();
    }
  };

  const { execute } = useAction(updateList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" updated`);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const id = formData.get("id") as string;
    const boardId = formData.get("boardId") as string;

    if (title === dataList.title) {
      return disableEditing();
    }

    execute({
      title,
      id,
      boardId,
    });

    disableEditing();
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  useEventListener("keydown", onkeydown);

  return (
    <div className="pt-2 px-2 text-sm font-semibold flex justify-between items-start gap-x-2">
      {isEditing ? (
        <form className="flex-1 px-[2px]" ref={formRef} action={handleSubmit}>
          <input
            hidden
            id="id"
            name="id"
            value={dataList.id}
            onChange={() => {}}
          />
          <input
            hidden
            id="boardId"
            name="boardId"
            value={dataList.boardId}
            onBlur={onBlur}
            onChange={() => {}}
          />
          <FormInput
            ref={inputRef}
            id="title"
            placeholder="Enter list title..."
            defaultValue={title}
            className="text-sm px-[7px] py-1 h-7 font-medium border-transparent hover:border-input transition truncate bg-transparent focus:bg-white"
          />
          <button type="submit" hidden></button>
        </form>
      ) : (
        <div
          className="w-full text-sm px-2.5 py-1 h-7 font-bold border-transparent"
          onClick={enableEditing}
        >
          {dataList.title}
        </div>
      )}
      <ListOptions data={dataList} onAddCard={onAddCard} />
    </div>
  );
};
