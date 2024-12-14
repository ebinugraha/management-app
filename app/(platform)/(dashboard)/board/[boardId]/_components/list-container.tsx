"use client";

import { ListWithCard } from "@/types";
import { ListForm } from "./list-form";
import { useEffect, useState } from "react";

import { DragDropContext, Droppable } from "@hello-pangea/dnd";

import { ListItem } from "./list-item";

export const ListContainer = ({
  data,
}: {
  boardId: string;
  data: ListWithCard[];
}) => {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol {...provided.droppableProps} ref={provided.innerRef} className="flex gap-x-3 h-full">
            {orderedData.map((list, index) => {
              return <ListItem key={list.id} index={index} data={list} />;
            })}
            {provided.placeholder}
            <ListForm />
            <div className="flex-shrink-0 w-1" />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};
