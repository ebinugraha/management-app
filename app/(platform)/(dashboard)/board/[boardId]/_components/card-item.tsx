"use client";

import { Card } from "@prisma/client";
import { Draggable } from "@hello-pangea/dnd";

type CardItemsProps = {
  data: Card;
  index: number;
};

export const CardItem = ({ data, index }: CardItemsProps) => {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          role="button"
          className="truncate border-2 border-transparent hover:border-gray-500 py-2 px-3 text-sm bg-white rounded-md shadow-sm"
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
};
