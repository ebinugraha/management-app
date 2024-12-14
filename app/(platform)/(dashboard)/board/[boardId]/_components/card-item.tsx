"use client";

import { Card } from "@prisma/client";

type CardItemsProps = {
  data: Card;
  index: number;
};

export const CardItem = ({ data }: CardItemsProps) => {
  return (
    <div role="button" className="truncate border-2 border-transparent hover:border-gray-500 py-2 px-3 text-sm bg-white rounded-md shadow-sm">
      {data.title}
    </div>
  );
};
